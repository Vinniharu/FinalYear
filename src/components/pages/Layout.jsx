import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AuthContext from "../context/auth-context";

const Layout = () => {
  let [sidebarControl, setSidebarControl] = useState(true);

  const onCloseSidebar = (sidebar) => {
    setSidebarControl(sidebar);
  };

  return (
    <div>
      <Navbar onClick={onCloseSidebar} />
      <div className="flex items-center relative box-border w-full justify-start h-fit overflow-x-hidden mt-4 mb-[2rem]">
        <Sidebar onClick={sidebarControl}/>
        <Outlet />
      </div>
      {console.log(auth.isLoggedIn)}
    </div>
  );
};

export default Layout;
