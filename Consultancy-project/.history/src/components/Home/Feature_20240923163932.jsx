import React from "react";
import md from "../../../public/images/md.png";
import counselor from "../../../public/images/counselor.jpg";
import ced from "../../../public/images/ced.jpg";

const teams = [
  {
    Name: "Bishal Chapagain",
    Post: "Managing Director",
    img: md,
    Description: "Aspire global Education",
  },
  {
    Name: "Chapendra Baral",
    Post: "Chief Executive Director",
    img: ced,
    Description: "Aspire global Education",
  },
  {
    Name: "Sishan Adhikari",
    Post: "Counselor",
    img: counselor,
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
          {teams.map((team, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-md border border-solid border-gray-300 p-4 md:p-10"
            >
              <img
                src={team.img}
                alt="Team-Image"
                className="inline-block h-24 w-24 object-cover rounded-full"
              />
              <h3 className="text-3xl font-bold font-serif tracking-wide">
                {team.Name}
              </h3>
              <p className="text-2xl text-[#FC5E08] font-semibold tracking-wide">
                {team.Post}
              </p>
              <p className="text-sm text-gray-500 tracking-wider">
                {team.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
