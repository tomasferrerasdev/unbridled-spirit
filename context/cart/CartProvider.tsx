import { FC, PropsWithChildren, useReducer } from 'react';
import { IcartProduct } from '../../interfaces/cart';
import { CartContext, cartReducer } from './';

export interface CartState {
  cart: IcartProduct[];
  children?: React.ReactNode;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
