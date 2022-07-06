import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { User } from '../../../models';
import { jwt } from '../../../utils';

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
      return userLogin(req, res);

    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}
const userLogin = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = '', password = '' } = req.body;

  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();

  if (!user) {
    return res
      .status(400)
      .json({ message: 'Email or password incorrect - Email' });
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    return res
      .status(400)
      .json({ message: 'Email or password incorrect - Password' });
  }

  const { role, name, _id } = user;

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
