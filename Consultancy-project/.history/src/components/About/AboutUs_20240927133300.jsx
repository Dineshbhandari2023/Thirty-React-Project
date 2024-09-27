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
        className="h-full w-full p-9"
      >
        <div className="flex justify-center text-center">
          <p className="text-2xl text-[#FC5E08] font-semibold font-sans tracking-wide">
            Welcome to Aspire Global Education
          </p>
          <h2 className="text-5xl font-serif tracking-wider text-[#015598] font-bold">
            Your Gateway to World-Class Education in Dubai
          </h2>
        </div>
      </Parallax>
      <img src="" alt="" />
    </div>
  );
};

export default AboutUs;
