import {createSlice} from "@reduxjs/toolkit";

const initFilter = [];

const filterSlice = createSlice({
  name: "filter",
  initialState: initFilter,
  reducers: {
    FETCH_FILTER: function (state, action) {
      return (state = action.payload);
    },
    RESET_FILTER: function (state, action) {
      return (state = []);
    },
  },
});

export const {FETCH_FILTER, RESET_FILTER} = filterSlice.actions;

export const filterReducers = filterSlice.reducer;
