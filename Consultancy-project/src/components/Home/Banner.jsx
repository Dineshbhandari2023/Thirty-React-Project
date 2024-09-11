import React from "react";
import banner from "../../../public/images/banner14.jpg";
import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    // <div style={{ backgroundImage: `url(${banner})` }}>
    <Parallax
      bgImage={banner}
      bgImageAlt="the cat"
      strength={200}
      className="flex justify-center text-center mt-20"
    >
      <div className="w-7/12 mt-14">
        <h2 className="text-6xl font-serif m-3 tracking-wider font-bold">
          Global Aspire Education Consultancy
        </h2>
        <p className="text-xl font-semibold font-sans tracking-wide my-4 mx-6">
          We are with you the Nepal’s Best Education Consultancy For Abroad
          Study in Dubai is just a click away{" "}
        </p>
        <div className="space-x-6 m-8">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-serif">
              Find Ideal Course
            </span>
          </button>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 font-serif bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              About Us
            </span>
          </button>
        </div>
      </div>
    </Parallax>
    // </div>
  );
};

export default Banner;
