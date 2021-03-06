import { ISize } from './';

export interface IcartProduct {
  _id: string;
  image: string;
  price: number;
  size?: ISize;
  slug: string;
  title: string;
  type: 'kentucky' | 'tennessee' | 'straight' | 'single-barrel' | 'accessories';
  ABV: number;
  quantity: number;
}
