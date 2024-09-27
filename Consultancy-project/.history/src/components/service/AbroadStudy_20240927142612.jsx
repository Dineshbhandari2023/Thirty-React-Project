import React from "react";
import dubai from "../../../public/images/abroadstudy.png";

const AbroadStudy = () => {
  return (
    <div className="mt-20">
      <img src={dubai} alt="Dubai Image" className="mb-8" />
      <h1 className="ml-14 text-6xl text-[#FC5E08] mb-3 font-bold font-serif">
        <span className="text-3xl text-[#015598] font-semibold"> Study in</span>{" "}
        <br /> Dubai
      </h1>
      <p>
        The UAE has an excellent educational system that welcomes students from
        all over the world. Students studying in UAE gain a global-level
        education and simultaneously enjoy the multi-cultural environment. There
        are several universities in Dubai with world-class rankings. In
        addition, UAE is home to some of the best artificial wonders of the
        world, including but not limited to Burj Khalifa and the palm islands.{" "}
        <br />
      </p>
    </div>
  );
};

export default AbroadStudy;
