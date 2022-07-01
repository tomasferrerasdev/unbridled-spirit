import { ISize } from './';

export interface IcartProduct {
  _id: String;
  image: string;
  price: number;
  size: ISize;
  slug: string;
  title: string;
  type: 'kentucky' | 'tennessee' | 'straight' | 'single-barrel';
  ABV: string;
  quantity: number;
}