import React, { useState } from "react";
import { TbArrowsRightLeft } from "react-icons/tb";

const Airport = () => {
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");
  return (
    <div className="p-4 mb-1 flex flex-row tracking-tighter">
      <div className="p-2 border border-gray-300 rounded-lg cursor-pointer">
        <label className="flex font-medium text-sm text-gray-700 tracking-wide">
          From
        </label>
        <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
          {from}
        </div>
        <div className="text-xs text-gray-500 tracking-wide">
          Hazrat Shahjalal International Airport
        </div>
      </div>
      <TbArrowsRightLeft className="absolute py-1 ml-[213px] my-8 size-6 z-10 text-blue-600 border border-gray-500 rounded-full shadow-lg bg-white" />

      <div className="p-1 border border-gray-300 rounded-lg cursor-pointer">
        <div className="p-2">
          <label className="flex font-medium text-sm text-gray-700 tracking-wide">
            To
          </label>
          <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
            {to}
          </div>
          <div className="text-xs text-gray-500 tracking-wide">
            Shah Amanat International Airport
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airport;
