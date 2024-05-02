import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; 
import logInslice from "./slice";

export const store = configureStore(
  {
    reducer: logInslice,
  },
  applyMiddleware(thunk) 
);
