import { Iproduct } from '../interfaces';
import { Product } from '../models';
import { db } from './';

export const getProductBySlug = async (
  slug: string
): Promise<Iproduct | null> => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};
