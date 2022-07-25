import { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Iproduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = { message: string } | Iproduct[] | Iproduct;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);

    case 'PUT':
      return updateProduct(req, res);

    default:
      res.status(400).json({ message: 'Bad request' });
      break;
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const products = await Product.find().sort({ title: 'asc' }).lean();
  await db.disconnect();

  res.status(200).json(products);
};
const updateProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { _id = '', images = [] } = req.body as Iproduct;

  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  if (images.length < 1) {
    return res.status(400).json({ message: 'At least one image needed' });
  }

  //TODO: localhost:3000/products/image/jpg

  try {
    await db.connect();

    const product = await Product.findById(_id);

    if (!product) {
      await db.disconnect();
      return res.status(400).json({ message: 'Invalid ID' });
    }

    //TODO: delete images Cloudinary

    await product.update(req.body);
    await db.disconnect();

    return res.status(200).json(product);
  } catch (error) {
    await db.disconnect();
    return res.status(400).json({ message: 'Check server logs' });
  }
};
