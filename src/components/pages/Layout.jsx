import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AuthContext from "../context/auth-context";

const Layout = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
      <Navbar/>
      <div className="flex items-center relative box-border w-full justify-start h-fit overflow-x-hidden mt-4 mb-[2rem]">
        <Sidebar/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
