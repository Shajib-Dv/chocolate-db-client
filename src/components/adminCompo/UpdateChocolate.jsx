/** @format */

import React, { useState } from "react";
import TitleBar from "../shared/TitleBar";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PrimaryButton from "../shared/PrimaryButton";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const loadedChocolate = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const from = e.target;
    const chocolateName = from.name.value;
    const country = from.country.value;
    const category = from.category.value;
    const photo = from.photo.value;
    const price = from.price.value;
    const production = from.production.value;
    const expire = from.expire.value;
    const chefName = from.chef.value;
    const chefPhoto = from.chefPhoto.value;
    const chocolate = {
      chocolateName,
      country,
      category,
      photo,
      price,
      production,
      expire,
      chefName,
      chefPhoto,
    };

    fetch(`http://localhost:5000/chocolates/${loadedChocolate._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(chocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Chocolate successfully updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setIsUpdate(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <TitleBar>Chocolate Management System</TitleBar>
      <Link to="/admin/manageChocolate">
        <button className="font-bold pt-6 flex items-center gap-2">
          <BsArrowLeft /> See All Chocolates
        </button>
      </Link>
      <div className="bg-[#1414140D] rounded-sm  my-10 p-6">
        <h1 className="text-title pb-4">
          Update the {loadedChocolate?.chocolateName}
        </h1>
        <p className="text-center text-gray-600 pb-4 font-semibold">
          Please fill up your chocolates information here to update{" "}
          {loadedChocolate?.chocolateName}
        </p>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="input-group input-group-vertical text-2xl">
              <span>Name</span>
              <input
                type="text"
                required
                name="name"
                defaultValue={loadedChocolate?.chocolateName}
                placeholder="Chocolate name"
                className="input focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical text-2xl">
              <span>Country</span>
              <input
                type="text"
                required
                name="country"
                defaultValue={loadedChocolate?.country}
                placeholder="Enter country name"
                className="input focus:outline-none"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input-group input-group-vertical text-2xl">
              <span>Category</span>
              <input
                type="text"
                required
                name="category"
                defaultValue={loadedChocolate?.category}
                placeholder="Premium"
                className="input focus:outline-none"
              />
            </label>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Photo url</span>
                <input
                  type="text"
                  required
                  name="photo"
                  defaultValue={loadedChocolate?.photo}
                  placeholder="Photo url"
                  className="input focus:outline-none"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Price</span>
                <input
                  type="number"
                  required
                  min={0}
                  defaultValue={loadedChocolate?.price}
                  name="price"
                  placeholder="Price"
                  className="input focus:outline-none"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Production date</span>
                <input
                  type="date"
                  required
                  name="production"
                  defaultValue={loadedChocolate?.production}
                  className="input focus:outline-none"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Expire date</span>
                <input
                  type="date"
                  required
                  name="expire"
                  defaultValue={loadedChocolate?.expire}
                  className="input focus:outline-none"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Chef</span>
                <input
                  type="text"
                  required
                  name="chef"
                  defaultValue={loadedChocolate?.chefName}
                  placeholder="Chef name"
                  className="input focus:outline-none"
                />
              </label>
            </div>
            <div className="form-control w-full">
              <label className="input-group input-group-vertical text-2xl">
                <span>Chef photo</span>
                <input
                  type="text"
                  required
                  name="chefPhoto"
                  defaultValue={loadedChocolate?.chefPhoto}
                  placeholder="Chef photo"
                  className="input focus:outline-none"
                />
              </label>
            </div>
          </div>
          <PrimaryButton>
            <input
              type="submit"
              value="Update"
              className="text-2xl w-full cursor-pointer"
            />
          </PrimaryButton>
        </form>
      </div>
    </>
  );
};

export default UpdateChocolate;
