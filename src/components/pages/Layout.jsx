import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = () => {

  const controlFunction = () => {
    setSidebarControl(!sidebarControl)
  }

  return (
    <div>
      <Navbar/>
      <div className="flex items-center relative box-border w-full justify-start h-fit overflow-x-hidden mt-4 mb-[2rem]">
        <Sidebar/>
        <Outlet />
      </div>function
      {console.log(auth.isLoggedIn)}
    </div>
  );
};

export default Layout;
