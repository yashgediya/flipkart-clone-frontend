import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "../constants/ProductConstants";

const URL = "http://localhost:8000";

export const getProductListSuccess = (productList: any) => {    
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: productList,
  };
};

export const getProductListFailure = (error: any) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const getProduct = () => async (dispatch: any) => {
  try {
    const { data }: any = await axios.get(`${URL}/products`);
    dispatch(getProductListSuccess(data));
  } catch (error: any) {
    dispatch(getProductListFailure(error.message));
  }
};
