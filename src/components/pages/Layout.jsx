import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = () => {
  let [sidebarControl, setSidebarControl] = useState(true);

  const onCloseSidebar = (sidebar) => {
    setSidebarControl(sidebar);
  };

  return (
    <div>
      <Navbar onClick={onCloseSidebar} />
      <div className="flex items-center relative w-[100vw] justify-start h-[90vh] overflow-x-hidden">
        <Sidebar onClick={sidebarControl} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
