import { createContext } from 'react';
import { IcartProduct } from '../../interfaces';

interface ContextProps {
  cart: IcartProduct[];
  addProductToCart: (prodcut: IcartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
