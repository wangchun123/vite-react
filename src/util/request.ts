import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api', // 可根据需要修改
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 添加 token
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 可统一处理响应数据
    return response.data;
  },
  (error: any) => {
    // 全局错误处理
    if (error.response) {
      // 例如：401 未授权
      if (error.response.status === 401) {
        // 清除本地 token 并跳转登录
        localStorage.removeItem('token');
        window.location.href = '/';
      }
      // 其它错误可自定义处理
      // alert(error.response.data?.message || '请求出错');
    } else {
      // alert('网络错误或服务器无响应');
    }
    return Promise.reject(error);
  }
);

export default instance;
