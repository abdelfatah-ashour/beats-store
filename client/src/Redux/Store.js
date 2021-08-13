import {configureStore} from "@reduxjs/toolkit";
import {allProductReducers} from "./slices/AllProductsSlice";
import {cartReducers} from "./slices/cartSlice";
import {authReducers} from "./slices/authSlice";
import {filterReducers} from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductReducers,
    cart: cartReducers,
    auth: authReducers,
    filter: filterReducers,
  },
  devTools: process.env.NODE_ENV !== "production",
});
