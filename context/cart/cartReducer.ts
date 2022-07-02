import { CartState } from '.';
import { IcartProduct } from '../../interfaces/cart';

type CartActionType = {
  type: '[Cart] - LoadCart from cookies | storage';
  payload: IcartProduct[];
};
{
  /*{type: '[Cart] - Add product', payload: IcartProduct}*/
}

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
      };

    default:
      return state;
  }
};
