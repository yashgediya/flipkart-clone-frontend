import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
} from "../constants/CartConstant";

const URL = "http://localhost:8000";

export const getCartItemsRequest = () => {
  return {
    type: ADD_TO_CART,
  };
};

export const getCartItemsSuccess = (cartItemsList: any) => {
  return {
    type: ADD_TO_CART,
    payload: cartItemsList,
  };
};

export const getCartItemsFailure = (error: any) => {
  return {
    type: ADD_TO_CART_ERROR,
    payload: error,
  };
};

export const removCartItems = (id: any) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const addToCart = (id: any, quantity: any) => async (dispatch: any) => {
  try {
    const { data }: any = await axios.get(`${URL}/products/${id}`);
    dispatch(getCartItemsSuccess({ ...data, quantity }));
  } catch (err: any) {
    dispatch(getCartItemsFailure(err.message));
  }
};

export const removeCart = (id: any) => (dispatch: any) => {
  dispatch(removCartItems(id));
};
