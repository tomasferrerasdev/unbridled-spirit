import { CartState } from '.';
import { IcartProduct } from '../../interfaces/cart';

type CartActionType =
  | {
      type: '[Cart] - LoadCart from cookies | storage';
      payload: IcartProduct[];
    }
  | { type: '[Cart] - Update products in cart'; payload: IcartProduct[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        cart: [...action.payload],
      };
    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };
    default:
      return state;
  }
};
