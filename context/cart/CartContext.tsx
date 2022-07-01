import { createContext } from 'react';
import { IcartProduct } from '../../interfaces';

interface ContextProps {
  cart: IcartProduct[];
}

export const CartContext = createContext({} as ContextProps);
