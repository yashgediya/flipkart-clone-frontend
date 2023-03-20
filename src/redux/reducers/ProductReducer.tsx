import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../constants/ProductConstants";

export const getProductReducer = (
  state: any = { products: [] },
  action: any
) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case GET_PRODUCTS_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
