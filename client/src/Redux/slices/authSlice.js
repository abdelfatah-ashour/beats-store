import {createSlice} from "@reduxjs/toolkit";

const initAuth = {
  isLogin: false,
  username: false,
  role: false,
};

const auth = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    LOGIN: (state, action) => {
      return (state = {
        isLogin: true,
        username: action.payload.username,
        role: action.payload.role,
      });
    },
    LOGOUT: state => {
      return (state = {
        isLogin: false,
        username: false,
        role: false,
      });
    },
  },
});

export const {LOGIN, LOGOUT} = auth.actions;
export const authReducers = auth.reducer;
