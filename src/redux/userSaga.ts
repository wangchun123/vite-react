import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from './store';

// 模拟异步登录 API
function fakeLoginApi(username: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(username);
    }, 1000);
  });
}

// worker saga: 处理异步登录
function* loginSaga(action: { type: string; payload: string }) {
  try {
    const username: string = yield call(fakeLoginApi, action.payload);
    yield put(login(username)); // 派发登录成功 action
  } catch (e) {
    // 可以处理错误
  }
}

// watcher saga: 监听 LOGIN_ASYNC action
function* userSaga() {
  yield takeEvery('LOGIN_ASYNC', loginSaga);
}

export default userSaga;
