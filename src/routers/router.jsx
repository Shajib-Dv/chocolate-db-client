/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddChocolate from "../components/adminCompo/AddChocolate";
import Home from "../layout/Home";
import AdminPanel from "../layout/AdminPanel";
import ManageChocolate from "../components/adminCompo/ManageChocolate";
import UpdateChocolate from "../components/adminCompo/UpdateChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      {
        path: "/admin",
        element: <AddChocolate />,
      },
      {
        path: "/admin/manageChocolate",
        element: <ManageChocolate />,
      },
      {
        path: "/admin/manageChocolate/:id",
        element: <UpdateChocolate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chocolates/${params.id}`),
      },
    ],
  },
]);

export default router;
