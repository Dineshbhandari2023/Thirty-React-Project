import React from "react";
import banner from "../../public/images/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-center text-center bg-orange-100">
      <div className="w-7/12 mt-14">
        <h2 className="text-6xl font-serif m-3 tracking-wider font-bold">
          Global Aspire Education Consultancy
        </h2>
        <p className="text-xl font-semibold font-sans tracking-wide my-4 mx-6">
          We are with you. Nepal’s Best Education Consultancy For Abroad Study
          in Dubai is just a click away{" "}
        </p>
      </div>
      <div className="flex justify-center text-center w-5/12 mx-10 my-10">
        <img src={banner} alt="banner Image" className="h-full" />
      </div>
    </div>
  );
};

export default Banner;
