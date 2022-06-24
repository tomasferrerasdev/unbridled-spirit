export interface Iproduct {
  _id: String;
  description: string;
  image: string;
  inStock: number;
  price: number;
  sizes: ISizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ITypes;
  ABV: string;
}

export type ISizes = '1L' | '750ml' | '375ml' | '200ml';
export type ITypes = 'Kentucky' | 'Tennessee' | 'Straight' | 'Single-Barrel';
