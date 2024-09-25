import React from "react";
import md from "../../../public/images/md.png";
import counselor from "../../../public/images/counselor.jpg";
import ced from "../../../public/images/ced.jpg";

const teams = [
  {
    name: "Bishal Chapagain",
    Post: "Managing Director",
    img: md,
    Description: "Aspire global Education",
  },
  {
    name: "Chapendra Baral",
    Post: "Managing Director",
    img: md,
    Description: "Aspire global Education",
  },
  {
    name: "Sishan Adhikari",
    Post: "Managing Director",
    img: md,
    Description: "Aspire global Education",
  },
];

const Feature = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold md:text-5xl">Our Teams</h2>
        </div>
        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <img
              src={md}
              className="inline-block h-16 w-16 object-cover rounded-full "
            />
            <h3 className="text-xl font-semibold">Support</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <img
              src={ced}
              alt=""
              className="inline-block h-16 w-16 object-cover rounded-full "
            />
            <h3 className="text-xl font-semibold">Organise</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>

          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <img
              src={counselor}
              alt=""
              className="inline-block h-16 w-16 object-cover rounded-full "
            />
            <h3 className="text-xl font-semibold">Resource</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
