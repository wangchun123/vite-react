import sagaMiddleware from './sagaMiddleware';
import rootSaga from './saga';
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
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 启动 saga
(sagaMiddleware as any).run && (sagaMiddleware as any).run(rootSaga);

export default store;
