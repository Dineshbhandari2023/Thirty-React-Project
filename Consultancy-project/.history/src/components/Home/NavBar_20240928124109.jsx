import React, { useState } from "react";
import logo from "../../../public/images/logo.png";
import logo2 from "../../../public/images/logo2.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppointmentPopup from "../AppointmentPopUp";

const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  let { pathname } = useLocation();
  let subPage = pathname.split("/")?.[1];

  let linkNess = (type = null) => {
    let classes = "block py-1 px-3 md:p-0";
    if (type === subPage) {
      classes += "rounded-lg text-[#FC5E08] ";
    } else {
      classes += "text-gray-500 hover:text-gray-900";
    }
    return classes;
  };

  return (
    <nav className="fixed bg-white shadow-lg dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img src={logo2} alt="logo2" className="h-7" />
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-[#FC5E08] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setShowPopup(true)} // Show popup when clicked
          >
            Appointment
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex p-4 md:p-0 mt-4 font-medium text-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className="m-3">
              <Link className={linkNess("")} to={"/"}>
                Home
              </Link>
            </li>
            <li className="m-3">
              <Link className={linkNess("about")} to={"/about"}>
                About
              </Link>
            </li>
            <li className="m-3">
              <Link className={linkNess("service")} to={"/service"}>
                Abroad Study
              </Link>
            </li>
            <li className="m-3">
              <Link className={linkNess("contact")} to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Show Appointment Popup */}
      {showPopup && <AppointmentPopup onClose={() => setShowPopup(false)} />}
    </nav>
  );
};

export default NavBar;
