import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const items = [
  { key: "1", icon: <PieChartOutlined />, label: "home" },
  { key: "2", icon: <DesktopOutlined />, label: "嵌套路由" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const username = useSelector((state: any) => state.user.name);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onMenuClick = ({ key }: { key: string }) => {
    if (key === "1") navigate("/home");
    else if (key === "2") navigate("/home/testNestedRoute");
  };

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1", "sub2", "sub3"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={onMenuClick}
      />
    </div>
  );
};

export default App;
