/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="md:w-4/5 md:mx-auto mx-10">
      <Outlet />
    </div>
  );
};

export default AdminPanel;
