import React from "react";

import { useRoutes } from "react-router-dom";

import Layout from "../Layout";

const Text = () => {
  return <>测试嵌套路由</>;
};

/**配置路由 */
const router = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Text />,
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
