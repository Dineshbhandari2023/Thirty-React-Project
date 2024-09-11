import React from "react";
import review from "../../../public/images/review.jpg";
import { Parallax } from "react-parallax";

const College = () => {
  return (
    <Parallax
      bgImage={review}
      bgImageAlt="the cat"
      strength={200}
      className="justify-center text-center"
    >
      <h1 className="w-full bg-white m-2 p-5 text-4xl font-bold text-blue-500 font-sans tracking-wide">
        Abroad Study with our Education Consultancy
      </h1>
    </Parallax>
  );
};

export default College;
