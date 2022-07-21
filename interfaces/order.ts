import { ISize, IUser } from './';
export interface IOrder {
  _id?: string;
  user?: IUser | string;
  orderItems: IOrderItem[];
  shippingAddress: ShippingAddress;
  paymentResult?: string;

  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  isPaid: boolean;
  paidAt?: string;

  transactionId?: string;
}

export interface IOrderItem {
  _id: string;
  image: string;
  price: number;
  size: ISize;
  slug: string;
  title: string;
  type: string;
  ABV: string;
  quantity: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}
