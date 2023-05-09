/** @format */

import React from "react";
import Swal from "sweetalert2";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChocolateCard = ({ chocolate, setIsDeleted, isDeleted }) => {
  const {
    _id,
    chocolateName,
    country,
    category,
    photo,
    price,
    production,
    expire,
    chefName,
    chefPhoto,
  } = chocolate;

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsDeleted(!isDeleted);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photo} />
                </div>
              </div>
            </div>
          </td>
          <td>{chocolateName}</td>
          <td>{country}</td>
          <td>{category}</td>
          <td className="flex items-center gap-1">
            <Link
              to={`/admin/manageChocolate/${_id}`}
              className="edit-btn p-3 text-[#774320]"
            >
              <BsFillPencilFill />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="edit-btn p-3 text-[#774320]"
            >
              <BsFillTrash3Fill />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ChocolateCard;
