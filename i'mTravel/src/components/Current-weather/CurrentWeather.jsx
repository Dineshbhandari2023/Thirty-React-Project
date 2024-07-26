import React from "react";

const CurrentWeather = () => {
  return (
    <div className="sm:w-80 md:w-96 mt-5 p-5 mx-auto border-2 rounded-md border-gray-400 bg-slate-900 text-white shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold pb-2 text-lg tracking-wider">Nepal</p>
          <p className="font-light text-lg">Sunny</p>
        </div>
        <img className="w-28 " src="icons/01d.png" alt="Weather" />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-6xl w-auto tracking-tighter mx-5">
          18°C
        </p>
        <div className="w-full pl-5">
          <div className="flex justify-between ">
            <span className="text-left p-0.5 tracking-wide font-semibold text-sm border border-white rounded-sm">
              {" "}
              Details
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-semibold text-sm">Feels like</span>
            <span className="text-right font-semibold text-sm">Cloudy</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-semibold text-sm">Wind</span>
            <span className="text-right font-semibold text-sm">4 m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-semibold text-sm">Humidity</span>
            <span className="text-right font-semibold text-sm">20%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-semibold text-sm">Pressure</span>
            <span className="text-right font-semibold text-sm">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
