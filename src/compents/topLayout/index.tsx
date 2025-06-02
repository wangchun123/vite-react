import React, { useState, useEffect } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const getItems = (name: string) => [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
  {
    key: "user",
    label: name,
    icon: <UserOutlined />,
    style: { float: "right", marginLeft: "auto" },
    children: [
      {
        type: "group",
        label: "退出登陆",
        children: [{ label: "登出", key: "getout" }],
      },
    ],
  },
];

const App = () => {
  const [current, setCurrent] = useState("mail");
  const navigate = useNavigate();
  const name = useSelector((state: any) => state.user.name);

  const onClick = (e: any) => {
    setCurrent(e.key);
    if (e.key === "getout") {
      navigate("/");
    }
  };

  const items = getItems(name);

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default App;
