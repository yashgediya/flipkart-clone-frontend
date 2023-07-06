import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/CartConstant";

export const cartReducer = (state: any = { cartItems: [] }, action: any) => {
  switch (action) {
    case ADD_TO_CART: {
      const item = action?.payload;
      const exist = state?.castItems?.find(
        (product: any) => product?.id === item?.id
      );
      if (exist) {
        return {
          ...state,
          cartItems: state?.cartItems.map((data: any) =>
            data?.product === exist?.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state?.cartItems, item] };
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state?.cartItems.filter(
          (product: any) => product?.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
