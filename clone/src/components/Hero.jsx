import React from "react";
import asset1 from "../assets/asset 1.jpeg";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 bg-bg ">
      <div className="z-10 mt-20 ml-96 bg-gradient-to-r from-primary to-secondary h-[500px] w-[400px] justify-center rounded-lg">
        <h3 className="pl-14 justify-center mt-40 text-6xl font-semibold tracking-wider">
          Adivasi <br /> Herbal
          <br /> Hair Oil
        </h3>
        <button className="ml-14 mt-7 px-5 py-2 border border-black rounded-md bg-black text-primary transition duration-300 hover:bg-black hover:shadow-[0_0_0_5px_black] ">
          Shop Now
        </button>
      </div>

      <div className="relative pt-14 pr-40 justify-end text-center ">
        <img
          className=" h-[550px] w-[1500px] rounded-lg shadow-2xl tracking-wider"
          src={asset1}
          alt="backgroundimg"
        />
      </div>
    </section>
  );
};

export default Hero;
