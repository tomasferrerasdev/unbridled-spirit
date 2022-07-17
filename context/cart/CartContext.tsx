import { createContext } from 'react';
import { IcartProduct } from '../../interfaces';
import { ShippingAddress } from './CartProvider';

interface ContextProps {
  isLoaded: boolean;
  cart: IcartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: ShippingAddress;

  addProductToCart: (product: IcartProduct) => void;
  updateProductQuantity: (product: IcartProduct) => void;
  removeCartProduct: (product: IcartProduct) => void;
  updateAddress: (address: ShippingAddress) => void;
}

export const CartContext = createContext({} as ContextProps);
