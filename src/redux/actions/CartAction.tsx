import axios from "axios";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  REMOVE_FROM_CART,
} from "../constants/CartConstant";

const URL = "http://localhost:8000";

export const addToCart = (id: any, quantity: any) => async (dispatch: any) => {
  try {
    const { data }: any = await axios.get(`${URL}/products/${id}`);
    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } });
  } catch (err: any) {
    dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
  }
};

export const removeCart = (id: any) => (dispatch: any) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
};
