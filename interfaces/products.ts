export interface Iproduct {
  _id: String;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  ABV: string;
  createdAt: String;
  updatedAt: String;
}

export type ISize = '1L' | '750ml' | '375ml' | '200ml';
export type IType = 'kentucky' | 'tennessee' | 'straight' | 'single-barrel';
