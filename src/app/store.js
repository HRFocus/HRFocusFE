import { configureStore } from "@reduxjs/toolkit";
import logInslice from "./slice";
export  const store = configureStore({
  reducer: logInslice,
});
