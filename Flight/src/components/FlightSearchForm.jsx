import React, { useState } from "react";
import FareType from "./FareType";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

function FlightSearchForm() {
  const [tripType, setTripType] = useState("roundTrip");
  const [fareType, setFareType] = useState("regular");
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");
  const [departureDate, setDepartureDate] = useState("08 Jul 24");
  const [returnDate, setReturnDate] = useState("09 Jul 24");
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  return (
    <div className="m-4 flex justify-center items-center h-screen w-screen bg-blue-100">
      <div className=" m-1 p-4 h-60 w-[1296px] border border-gray-300 rounded-lg shadow-lg bg-white">
        {/* Trip Type Container */}
        <div className="flex flex-initial ">
          <label className="mr-2">
            <input
              type="radio"
              name="triptype"
              value="oneWay"
              checked={tripType === "oneWay"}
              onChange={() => setTripType("oneWay")}
              className="mr-2 size-4"
            />
            One Way
          </label>
          <label className="mr-2">
            <input
              type="radio"
              name="tripType"
              value="roundTrip"
              checked={tripType === "roundTrip"}
              onChange={() => setTripType("roundTrip")}
              className="mr-2 size-4"
            />
            Round Trip
          </label>
        </div>

        <div className="flex">
          <div className="p-2 m-1 flex flex-row ">
            {/* From and To Container */}
            <div className="p-4 mb-1 flex flex-row tracking-tighter">
              <div className="p-2 border border-gray-300 rounded-l-lg cursor-pointer">
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

              <div className="p-2 border border-gray-300 rounded-r-lg cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700 tracking-wide">
                  To
                </label>
                <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
                  {to}
                </div>
                <div className="text-xs text-gray-500 tracking-wide">
                  Hazrat Shahjalal International Airport
                </div>
              </div>
            </div>
            {/* From and To Container */}
            {/* Departure and Return Container */}

            <div className="p-4 mb-1 flex flex-row tracking-tighter">
              <div className="p-2 border border-gray-300 rounded-l-lg cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700 tracking-wide">
                  Departure{" "}
                  <SlArrowDown className="m-1 size-3 cursor-pointer" />
                </label>

                <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
                  {departureDate}
                </div>
                <div className="text-xs text-gray-500 tracking-wide">
                  Hazrat Shahjalal International Airport
                </div>
              </div>

              <div className="p-2 border border-gray-300 rounded-r-lg cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700 tracking-wide">
                  Return <SlArrowDown className="m-1 size-3 cursor-pointer" />
                </label>
                <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
                  {returnDate}
                </div>
                <div className="text-xs text-gray-500 tracking-wide">
                  Hazrat Shahjalal International Airport
                </div>
              </div>
            </div>
            {/* Departure and Return Container */}
            {/* Traveller  Container */}
            <div className="p-4 mb-2 flex flex-row tracking-tighter">
              <div className="p-2 border border-gray-300 rounded-lg cursor-pointer">
                <label className="flex text-sm text-gray-700 tracking-wide">
                  Traveller & Booking Class
                </label>
                <div className="pr-1 text-xl text-gray-700 font-bold tracking-wide">
                  {travelers} Traveler
                </div>
                <div className="text-xs text-gray-500 tracking-wide">
                  Hazrat Shahjalal International Airport
                </div>
              </div>
            </div>
            {/* Traveller container */}
          </div>
        </div>
        <FareType />
        <div className="text-center ">
          <button className="relative mb-10 bg-blue-600 text-white px-6 py-3 rounded-md text-md font-semibold font-sans">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchForm;
