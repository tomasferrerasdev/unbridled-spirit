import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { User } from '../../../models';
import { jwt, validations } from '../../../utils';

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        email: string;
        name: string;
        role: string;
      };
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> | undefined {
  switch (req.method) {
    case 'POST':
      return userRegister(req, res);

    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}
const userRegister = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    email = '',
    password = '',
    name = '',
  } = req.body as { email: string; password: string; name: string };

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password should have at least 6 characters',
    });
  }

  if (name.length < 3) {
    return res.status(400).json({
      message: 'Name should have at least 2 characters',
    });
  }

  if (!validations.isValidEmail(email)) {
    return res.status(400).json({
      message: 'Email seems not valid',
    });
  }

  await db.connect();
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: 'You cant use this email' });
  }

  const newUser = new User({
    email: email.toLowerCase(),
    password: bcrypt.hashSync(password),
    role: 'client',
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Check server logs' });
  }

  const { _id, role } = newUser;

  const token = jwt.signToken(_id, email);

  return res.status(200).json({
    token,
    user: {
      role,
      name,
      email,
    },
  });
};
