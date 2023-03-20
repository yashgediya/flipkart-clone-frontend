import { combineReducers } from "redux";
import { getProductReducer } from "./reducers/ProductReducer";

const rootReducer = combineReducers({ getProduct: getProductReducer });

export default rootReducer;
