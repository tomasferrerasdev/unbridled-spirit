import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { IOrder } from '../interfaces';
import { Order } from '../models';

export const getOrderByID = async (id: string): Promise<IOrder | null> => {
  if (!isValidObjectId(id)) {
    return null;
  }

  await db.connect();
  const order = await Order.findById(id).lean();
  await db.disconnect();

  if (!order) {
    return null;
  }

  return JSON.parse(JSON.stringify(order));
};

export const getOrdersByUser = async (userID: string): Promise<IOrder[]> => {
  if (!isValidObjectId(userID)) {
    return [];
  }

  await db.connect();
  const orders = await Order.find({ user: userID }).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(orders));
};
