/** @format */

import React, { useEffect, useState } from "react";
import TitleBar from "../shared/TitleBar";
import { Link } from "react-router-dom";
import ChocolateCard from "./ChocolateCard";
import { BsPlusSquare } from "react-icons/bs";

const ManageChocolate = () => {
  const [chocolates, setChocolates] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/chocolates")
      .then((res) => res.json())
      .then((data) => setChocolates(data))
      .catch((error) => console.log(error));
  }, [isDeleted]);

  //   console.log(chocolates);

  return (
    <>
      <TitleBar>Chocolate Management System</TitleBar>
      <Link to="/admin">
        <button className="p-4 border-2 my-6 font-bold flex items-center gap-2">
          <BsPlusSquare /> Add new chocolate
        </button>
      </Link>
      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country/factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          {chocolates &&
            chocolates.map((chocolate) => (
              <ChocolateCard
                chocolate={chocolate}
                key={chocolate._id}
                setIsDeleted={setIsDeleted}
                isDeleted={isDeleted}
              />
            ))}
        </table>
      </div>
    </>
  );
};

export default ManageChocolate;
