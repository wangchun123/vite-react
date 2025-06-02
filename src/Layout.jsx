import { useState } from "react";

import LeftLayout from "./compents/LeftLayout/index";

import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <div className="leftLayout">

      <LeftLayout></LeftLayout>
      </div>


    </div>
  );
}

export default Layout;
