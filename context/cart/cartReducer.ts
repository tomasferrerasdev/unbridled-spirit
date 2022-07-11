import { CartState } from '.';
import { IcartProduct } from '../../interfaces';

type CartActionType =
  | {
      type: '[Cart] - LoadCart from cookies | storage';
      payload: IcartProduct[];
    }
  | { type: '[Cart] - Update products in cart'; payload: IcartProduct[] }
  | { type: '[Cart] - Change product quantity'; payload: IcartProduct }
  | { type: '[Cart] - Remove cart product'; payload: IcartProduct }
  | {
      type: '[Cart] - Update order summary';
      payload: {
        numberOfItems: number;
        subTotal: number;
        tax: number;
        total: number;
      };
    };

export const CartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };
    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };
    case '[Cart] - Change product quantity':
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        }),
      };
    case '[Cart] - Remove cart product':
      return {
        ...state,
        cart: state.cart.filter(
          (product) =>
            !(
              product._id === action.payload._id &&
              product.size === action.payload.size
            )
        ),
      };
    case '[Cart] - Update order summary':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
