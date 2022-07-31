import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { db } from '../../../database';
import { IOrder } from '../../../interfaces';
import { Order, Product } from '../../../models';

type Data = { message: string } | IOrder;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createOrder(req, res);

    default:
      return res.status(400).json({ message: 'Bad request' });
  }
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { orderItems, total } = req.body as IOrder;

  const session: any = await getSession({ req });

  if (!session) {
    return res
      .status(401)
      .json({ message: 'Should be authenticated to create an order' });
  }

  const productsIDs = orderItems.map((p) => p._id);

  await db.connect();

  const dbProducts = await Product.find({ _id: { $in: productsIDs } });

  try {
    const subTotal = orderItems.reduce((prev, current) => {
      const currentPrice = dbProducts.find(
        (prod) => prod.id === current._id
      )?.price;

      if (!currentPrice) {
        throw new Error('Check your cart again, nonexistent product');
      }

      return currentPrice * current.quantity + prev;
    }, 0);

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX || 0);
    const backendTotal = subTotal * (taxRate + 1);

    if (total !== backendTotal) {
      throw new Error('Total does not match the actual amount');
    }

    const userID = session.user._id;
    const newOrder = new Order({ ...req.body, isPaid: false, user: userID });
    newOrder.total = Math.round(newOrder.total * 100) / 100;

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({ message: error.message || 'Check server logs' });
  }
};
