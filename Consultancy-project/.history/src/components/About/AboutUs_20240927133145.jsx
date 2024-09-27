import React from "react";
import review from "../../../public/images/review.jpg";
import { Parallax } from "react-parallax";
const AboutUs = () => {
  return (
    <div className="py-16 bg-white">
      <Parallax
        bgImage={review}
        bgImageAlt="the cat"
        strength={200}
        className="h-full w-full"
      >
        <p className="text-2xl text-[#FC5E08] font-semibold font-sans tracking-wide">
          Welcome to Aspire Global Education
        </p>
        <h2 className="text-5xl font-serif tracking-wider text-[#015598] font-bold">
          Your Gateway to World-Class
        </h2>
        <p className="text-6xl text-[#FC5E08] font-bold font-sans tracking-wide">
          Education in Dubai
        </p>
      </Parallax>
      <img src="" alt="" />
    </div>
  );
};

export default AboutUs;
