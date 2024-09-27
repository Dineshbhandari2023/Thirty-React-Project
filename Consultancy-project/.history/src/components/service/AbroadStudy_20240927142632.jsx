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
        More than 80 percent of the workforce is foreign, making it highly
        diverse. Furthermore, the city’s cosmo politan culture allows you to
        interact with nationals from every corner of the world. In addition, the
        UAE is a crime-free country. Hence, studying in Dubai is the best way to
        gain international experience in a safe environment. Additionally, the
        schools and universities in Dubai follow the standards of the United
        States, Britain, Germany, Canada, and Australia. All courses are taught
        in English. Hence, students can efficiently study in the country.
        <br />
      </p>
    </div>
  );
};

export default AbroadStudy;
