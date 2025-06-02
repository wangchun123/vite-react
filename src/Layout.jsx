import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftLayout from "./compents/LeftLayout/index";
import TopLayout from "./compents/topLayout/index";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <div className="leftLayout">
        <LeftLayout></LeftLayout>
      </div>
      <div style={{display:''}}>

      <div className="topLayout">
        <TopLayout></TopLayout>
      </div>
      <div>
       
        <Outlet/>
      </div>
      </div>
    </div>
  );
}

export default Layout;
