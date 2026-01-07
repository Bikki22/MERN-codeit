import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import userPrefrenceReducer from "@/redux/userPrefrences/userPrefrencesSlice";
import productReducer from "@/redux/product/productSlice";
import cartReducer from "@/redux/cart/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPrefrence: userPrefrenceReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
