import {createSlice} from "@reduxjs/toolkit";
import Axios from "../../utilities/defaultAxios";

const initAllProducts = {
  loading: false,
  products: [],
  error: false,
};

const allSProducts = createSlice({
  name: "allProducts",
  initialState: initAllProducts,
  reducers: {
    FETCHED_ALL_PRODUCT_REQUEST: state => {
      return {
        ...state,
        loading: true,
      };
    },
    FETCHED_ALL_PRODUCT_SUCCESS: (state, action) => {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    },
    FETCHED_ALL_PRODUCT_FAILED: state => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export const {
  FETCHED_ALL_PRODUCT_REQUEST,
  FETCHED_ALL_PRODUCT_SUCCESS,
  FETCHED_ALL_PRODUCT_FAILED,
} = allSProducts.actions;

export const allProductReducers = allSProducts.reducer;

export const fetchAllProduct = () => async dispatch => {
  dispatch(FETCHED_ALL_PRODUCT_REQUEST());
  await Axios.get("/product")
    .then(response => {
      return dispatch(FETCHED_ALL_PRODUCT_SUCCESS(response.data.message));
    })
    .catch(() => {
      return dispatch(FETCHED_ALL_PRODUCT_FAILED());
    });
};
