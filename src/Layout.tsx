import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftLayout from "./component/LeftLayout";
import TopLayout from "./component/topLayout";
import "./Layout.less";

function Layout() {
  return (
    <div className="layout">
      <div className="leftLayout">
        <LeftLayout />
      </div>
      <div style={{ display: "" }}>
        <div className="topLayout">
          <TopLayout />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
