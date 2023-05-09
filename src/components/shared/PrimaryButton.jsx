/** @format */

import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div
      className="rounded-md flex justify-center items-center p-4 my-6 text-white font-bold cursor-pointer w-1/2 mx-auto"
      style={{ background: "linear-gradient(0deg, #91572B, #91572B)" }}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
