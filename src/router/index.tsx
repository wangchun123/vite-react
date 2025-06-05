import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
// 懒加载页面组件
const Login = lazy(() => import("../pages/Login"));
const Layout = lazy(() => import("../Layout"));
const TestRouter = lazy(() => import("../pages/TestRouter"));
const Home = lazy(() => import("../pages/Home"));

const Text = () => {
  return <>测试嵌套路由</>;
};

const router = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "testNestedRoute",
        element: <TestRouter />,
      },
    ],
  },
];

const PageRouter = () => {
  const element = useRoutes(router);
  return <Suspense fallback={<div>加载中...</div>}>{element}</Suspense>;
};

export default PageRouter;
