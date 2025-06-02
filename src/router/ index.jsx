import React from "react";

import { useRoutes } from "react-router-dom";

import Login from "../pages/Login/ index";
import Layout from "../Layout";
import TestRouter from "../pages/TestRouter";

const Text = () => {
  return <>测试嵌套路由</>;
};

/**配置路由 */
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
        path: "/home/testNestedRoute",
        element: <TestRouter />,
      },
    ],
  },
  // {
  //   path: "/some",
  //   element: <TopLayout />,
  // },
];

const PageRouter = () => {
  const element = useRoutes(router);
  return <>{element}</>;
};

export default PageRouter;
