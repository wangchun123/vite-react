import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "qwer",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.name = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.name = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
