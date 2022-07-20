import { IcartProduct, ShippingAddress } from '../../interfaces';
import { CartState } from './';

type CartActionType =
  | {
      type: '[Cart] - LoadCart from cookies | storage';
      payload: IcartProduct[];
    }
  | { type: '[Cart] - Update products in cart'; payload: IcartProduct[] }
  | { type: '[Cart] - Change product quantity'; payload: IcartProduct }
  | { type: '[Cart] - Remove cart product'; payload: IcartProduct }
  | { type: '[Cart] - LoadAddress from cookies'; payload: ShippingAddress }
  | { type: '[Cart] - Update Address'; payload: ShippingAddress }
  | { type: '[Cart] - Order complete' }
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

    case '[Cart] - Update Address':
    case '[Cart] - LoadAddress from cookies':
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case '[Cart] - Order complete':
      return {
        ...state,
        cart: [],
        numberOfItems: 0,
        subTotal: 0,
        tax: 0,
        total: 0,
      };

    default:
      return state;
  }
};
