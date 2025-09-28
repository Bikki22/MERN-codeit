import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice";
import userPrefrenceReducer from "@/redux/userPrefrences/userPrefrencesSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userPrefrence: userPrefrenceReducer,
});

export default rootReducer;
