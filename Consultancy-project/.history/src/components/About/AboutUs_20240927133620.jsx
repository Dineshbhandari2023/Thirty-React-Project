import React from "react";
import review from "../../../public/images/aboutus.png";

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <img src={review} alt="" />
      <div className="mx-10 justify-center text-center">
        <p className="text-2xl text-[#FC5E08] font-semibold font-sans tracking-wide">
          Welcome to Aspire Global Education
        </p>
        <h2 className="text-5xl font-serif tracking-wider text-[#015598] font-bold">
          Your Gateway to World-Class Education in Dubai
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;
