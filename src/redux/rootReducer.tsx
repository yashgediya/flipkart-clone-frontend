import { combineReducers } from "redux";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/ProductReducer";
import { cartReducer } from "./reducers/CartReducer";

const rootReducer = combineReducers({
  getProduct: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
