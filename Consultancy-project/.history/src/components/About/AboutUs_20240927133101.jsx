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
        className="h-full"
      ></Parallax>
      <img src="" alt="" />
    </div>
  );
};

export default AboutUs;
