import { createContext } from 'react';
import { IcartProduct } from '../../interfaces';

interface ContextProps {
  isLoaded: boolean;
  cart: IcartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
  addProductToCart: (product: IcartProduct) => void;
  updateProductQuantity: (product: IcartProduct) => void;
  removeCartProduct: (product: IcartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
