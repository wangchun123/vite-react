import React from "react";

import { useRoutes } from "react-router-dom";

import Layout from "../Layout";
import TopLayout from "../compents/topLayout/index";

const Text = () => {
  return <>测试嵌套路由</>;
};

const router = [
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Text></Text>,
      },
    ],
  },
  {
    path: "/some",
    element: <TopLayout></TopLayout>,
  },
];

const PageRouter = () => {
  const element = useRoutes(router);
  return <>{element}</>;
};

export default PageRouter;
