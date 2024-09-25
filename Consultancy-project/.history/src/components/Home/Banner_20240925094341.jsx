import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../../public/images/banner.png";
import { Parallax } from "react-parallax";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <Parallax
        bgImage={banner}
        bgImageAlt="the cat"
        strength={200}
        className=" pb-10"
      >
        {/* Flex container to center the content */}
        <div className="flex flex-col items-center justify-center text-center w-full h-full py-20">
          <p className="text-xl text-[#FC5E08] font-semibold font-sans tracking-wide">
            Welcome to Aspire Global Education
          </p>
          <h2 className="text-5xl font-serif tracking-wider text-[#015598] font-bold">
            Your Gateway to World-Class
          </h2>
          <p className="text-6xl text-[#FC5E08] font-bold font-sans tracking-wide">
            Education in Dubai
          </p>

          <div className="space-x-6 m-8">
            <button
              onClick={() => {
                navigate("/service");
              }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-serif bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Find Ideal Course
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 font-serif bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                About Us
              </span>
            </button>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Banner;
