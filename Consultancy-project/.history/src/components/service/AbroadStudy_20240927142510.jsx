import React from "react";
import dubai from "../../../public/images/abroadstudy.png";

const AbroadStudy = () => {
  return (
    <div className="mt-20">
      <img src={dubai} alt="Dubai Image" className="mb-8" />
      <h1 className="ml-14 text-6xl text-[#015598] font-bold font-serif">
        <span className="text-3xl text-[#015598] font-semibold"> Study in</span>{" "}
        <br /> Dubai
      </h1>
    </div>
  );
};

export default AbroadStudy;
