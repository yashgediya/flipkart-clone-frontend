import axios from "axios";
import {
  GET_PRODUCTS_DETAILS_FAILURE,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_DETAILS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "../constants/ProductConstants";

const URL = "http://localhost:8000";

// ............... Get Products ...................

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

// ............... Get Products By Id ...................

export const getProductDetailsRequest = () => {
  return {
    type: GET_PRODUCTS_DETAILS_REQUEST,
  };
};

export const getProductDetailsSuccess = (productList: any) => {
  return {
    type: GET_PRODUCTS_DETAILS_SUCCESS,
    payload: productList,
  };
};

export const getProductDetailsFailure = (error: any) => {
  return {
    type: GET_PRODUCTS_DETAILS_FAILURE,
    payload: error,
  };
};

export const getProductDetails = (id: any) => async (dispatch: any) => {
  try {
    const { data }: any = await axios.get(`${URL}/products/${id}`);
    dispatch(getProductDetailsRequest());
    dispatch(getProductDetailsSuccess(data));
  } catch (error: any) {
    dispatch(getProductDetailsFailure(error.message));
  }
};
