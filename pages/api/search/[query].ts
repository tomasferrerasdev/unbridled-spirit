import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Iproduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = { message: string } | Iproduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return searchProducts(req, res);

    default:
      return res.status(400).json({
        message: 'Bad request',
      });
  }
}

const searchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { query = '' } = req.query;

  if (query.length === 0) {
    return res.status(400).json({
      message: 'Should specify the search query',
    });
  }

  query = query.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: query },
  })
    .select('title images price inStock slug -_id')
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
