import React from "react";
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-9 justify-center">
        <p className="p-1 text-center text-lg font-semibold bg-primary text-black font-arial tracking-wide">
          Original Adivasi Hair Oil [ BUY 1 GET 1 FREE In Just 1199 ]
        </p>
      </div>
      <div className="justify-center text-center bg-bg">
        <div className="flex justify-center">
          <IoIosSearch className="absolute ml-[390px] my-10 lg:mr-[1100px] justify-center size-6 cursor-pointer" />
          <img
            className="flex m-4 justify-center text-center h-24 w-72"
            src={logo}
            alt="logo"
          />
          <LuShoppingBag className="absolute ml-[440px] my-11 lg:ml-[870px] justify-center size-4 cursor-pointer" />
        </div>
        <a
          className="px-7 mb-2 rounded-md bg-bg text-gray-500 text-sm font-semibold transition duration-150 hover:bg-white hover:text-gray-500 border-2 border-transparent hover:border-black tracking-wide"
          href=""
        >
          Home
        </a>
      </div>
    </>
  );
};

export default NavBar;
