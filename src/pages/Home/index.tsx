import React from "react";
import { Card } from "antd";
import "./index.less";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Card className="home-card" bordered={false}>
        <h1>欢迎来到首页！</h1>
        <p>这是一个 React + Redux + Ant Design + TypeScript 的管理后台模板。</p>
        <p>你可以通过左侧菜单栏切换不同功能页面。</p>
      </Card>
    </div>
  );
};

export default Home;
