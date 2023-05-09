/** @format */

import React from "react";

const TitleBar = ({ children }) => {
  return (
    <div
      className="w-4/5 mx-auto p-8 text-center text-white mt-20 text-5xl font-bold rounded-md"
      style={{
        background:
          "radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default TitleBar;
