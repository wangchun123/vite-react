import { configureStore, createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  isLogin: boolean;
}

const initialState: UserState = {
  name: "qwer",
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
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
