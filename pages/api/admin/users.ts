import { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IUser } from '../../../interfaces';
import { User } from '../../../models';

type Data = { message: string } | IUser[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getUsers(req, res);

    case 'PUT':
      return updateUser(req, res);

    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}
const getUsers = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const users = await User.find()
    .select('-password')
    .lean()
    .sort({ name: 'asc' });
  await db.disconnect();

  res.status(200).json(users);
};

const updateUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { userID = '', role = '' } = req.body;

  if (!isValidObjectId(userID)) {
    res.status(400).json({ message: 'Nonexistent user with the specified id' });
  }

  const validRoles = ['admin', 'SEO', 'super-user', 'client'];
  if (!validRoles.includes(role)) {
    res
      .status(400)
      .json({ message: 'Role not allowed' + validRoles.join(', ') });
  }

  await db.connect();

  const user = await User.findById(userID);
  if (!user) {
    res.status(400).json({ message: 'User not found: ' + userID });
  }

  user!.role = role;
  await user?.save();
  await db.disconnect();

  return res.status(200).json({ message: 'User updated' });
};
