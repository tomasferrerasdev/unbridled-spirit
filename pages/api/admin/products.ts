import { v2 as cloudinary } from 'cloudinary';
import { isValidObjectId } from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Iproduct } from '../../../interfaces';
import { Product } from '../../../models';
cloudinary.config(process.env.CLOUDINARY_URL || '');

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

    case 'POST':
      return createProduct(req, res);

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
    return res.status(400).json({ message: 'Product needs at least 1 image' });
  }

  //TODO: localhost:3000/products/image/jpg

  try {
    await db.connect();

    const product = await Product.findById(_id);

    if (!product) {
      await db.disconnect();
      return res.status(400).json({ message: 'Invalid ID' });
    }

    product.images.forEach(async (image) => {
      if (!images.includes(image)) {
        //delete
        const [cleanID, extension] = image
          .substring(image.lastIndexOf('/') + 1)
          .split('.');

        await cloudinary.uploader.destroy(cleanID);
      }
    });

    await product.update(req.body);
    await db.disconnect();
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: 'Check server logs' });
  }
};
const createProduct = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { images = [] } = req.body as Iproduct;

  if (images.length < 1)
    return res.status(400).json({ message: 'Product needs at least 1 image' });

  try {
    await db.connect();
    const productInDB = await Product.findOne({ slug: req.body.slug }).lean();

    if (productInDB) {
      await db.disconnect();
      return res
        .status(400)
        .json({ message: 'Theres a product with same slug' });
    }

    const product = new Product(req.body);

    await product.save();
    await db.disconnect();

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    await db.disconnect();
    return res.status(400).json({ message: 'Check server logs' });
  }
};
