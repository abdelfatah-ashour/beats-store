import {createSlice} from "@reduxjs/toolkit";
const initCart = [];

const createCart = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    GET_CART: (state, action) => {
      return (state = action.payload);
    },
    SUCCESS_ORDER: (state, action) => {
      return (state = []);
    },
  },
});

export const {GET_CART, SUCCESS_ORDER} = createCart.actions;
export const cartReducers = createCart.reducer;
