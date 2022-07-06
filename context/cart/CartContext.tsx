import { createContext } from 'react';
import { IcartProduct } from '../../interfaces';

interface ContextProps {
  cart: IcartProduct[];
  addProductToCart: (product: IcartProduct) => void;
  updateProductQuantity: (product: IcartProduct) => void;
  removeCartProduct: (product: IcartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
