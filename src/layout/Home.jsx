/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2 className="text-title">
        Welcome to Chocolate House !!! visit /admin for more info{" "}
      </h2>
      <Outlet />
    </>
  );
};

export default Home;
