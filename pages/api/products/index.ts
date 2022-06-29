import type { NextApiRequest, NextApiResponse } from 'next';
import { db, SHOP_CONSTANTS } from '../../../database';
import { Iproduct } from '../../../interfaces/products';
import { Product } from '../../../models';

type Data = { message: string } | Iproduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void | Promise<void> {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);

    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { type = 'all' } = req.query;

  let condition = {};

  if (type !== 'all' && SHOP_CONSTANTS.validTypes.includes(`${type}`)) {
    condition = { type };
  }

  await db.connect();
  const products = await Product.find(condition)
    .select('title images price inStock slug -_id type')
    .lean();
  await db.disconnect();

  return res.status(200).json(products);
};
