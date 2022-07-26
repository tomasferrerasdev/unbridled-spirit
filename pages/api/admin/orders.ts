import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IOrder } from '../../../interfaces/order';
import { Order } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IOrder[];

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getOrders(req, res);

    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}
const getOrders = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  db.connect();

  const orders = await Order.find()
    .sort({ createdAt: 'desc' })
    .populate('user', 'name email')
    .lean();

  db.disconnect();

  return res.status(200).json(orders);
};
