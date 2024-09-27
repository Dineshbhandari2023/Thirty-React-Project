import React from "react";
import review from "../../../public/images/aboutus.png";

const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <img src={review} alt="" />
      <div className="mx-16 my-7 justify-center text-center">
        <h2 className="text-5xl font-serif tracking-wider text-[#FC5E08] font-bold">
          Welcome to Aspire Global Education
        </h2>
        <p className="text-2xl  font-semibold font-sans  text-[#015598] tracking-wide">
          Your Gateway to World-Class Education in Dubai
        </p>
      </div>
      <div>
        <h1 className="bg-[#FC5E08] text-2xl font-bold text-white p-2">
          About Us
        </h1>
        <p>
          Aspire Global Education is a full-service educational consultancy
          dedicated to helping students achieve their academic dreams in Dubai.
          From university admissions to job placement, legal advice, and
          exclusive accommodation, we provide all the support students need. Our
          board members, living in the same accommodation, offer continuous
          guidance, ensuring a personalized and successful journey for every
          student.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
