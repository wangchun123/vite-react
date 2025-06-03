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
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.name = "";
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { login, logout, setName } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 启动 saga
(sagaMiddleware as any).run && (sagaMiddleware as any).run(rootSaga);

export default store;
