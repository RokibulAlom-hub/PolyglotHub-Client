import React from "react";
import Navbar from "../Sharedpage&Comp/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Sharedpage&Comp/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-primary text-black dark:bg-black dark:text-white">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
