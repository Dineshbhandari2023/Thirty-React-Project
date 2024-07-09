import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

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
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="p-8 h-60 border border-gray-300 rounded-lg shadow-lg bg-white">
        {/* Trip Type Container */}
        <div className="flex flex-initial gap-1 ">
          <label className="mr-2">
            <input
              type="radio"
              name="triptype"
              value="oneWay"
              checked={tripType === "oneWay"}
              onChange={() => setTripType("oneWay")}
              className="mr-3"
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
              className="mr-3"
            />
            Round Trip
          </label>
        </div>

        <div className="">
          <div className="p-4 mb-2 flex flex-row tracking-tighter">
            {/* From and To Container */}
            <div className="p-4 mb-2 flex flex-row tracking-tighter">
              <div className="p-4 border border-gray-300 rounded-md cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700">
                  From
                </label>
                <div className="p-2 text-xl font-semibold">{from}</div>
                <div className="text-sm text-gray-500">
                  Hazrat Shahjalal International Airport
                </div>
              </div>

              <div className="p-4 border border-gray-300 rounded-md cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700">
                  To
                </label>
                <div className="p-2 text-xl font-semibold">{to}</div>
                <div className="text-sm text-gray-500">
                  Hazrat Shahjalal International Airport
                </div>
              </div>
            </div>

            {/* Departure and Return Container */}
            <div className="p-4 mb-2 flex flex-row tracking-tighter">
              <div className="p-1 border border-gray-300 rounded-l-lg cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700">
                  Departure
                </label>
                <div className="p-2 text-xl font-semibold">{from}</div>
                <div className="text-sm text-gray-500">
                  Hazrat Shahjalal International Airport
                </div>
              </div>

              <div className="p-1 border border-gray-300 rounded-r-lg cursor-pointer">
                <label className="flex font-medium text-sm text-gray-700">
                  Return
                </label>
                <div className="pr-1 text-xl font-semibold">{to}</div>
                <div className="text-sm text-gray-500">
                  Hazrat Shahjalal International Airport
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightSearchForm;

// import React from "react";

// const FlightSearchForm = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100">
//       <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
//         <div className="text-xl font-bold">Logo</div>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           Sign in
//         </button>
//       </header>

//       <main className="flex flex-col items-center mt-8 w-full px-4">
//         <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
//           <div className="mb-4">
//             <label className="mr-4">
//               <input type="radio" name="tripType" value="oneWay" /> One Way
//             </label>
//             <label>
//               <input type="radio" name="tripType" value="roundTrip" /> Round
//               Trip
//             </label>
//           </div>
//           <div className="flex flex-wrap gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="From"
//               className="flex-1 p-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="To"
//               className="flex-1 p-2 border rounded"
//             />
//             <input type="date" className="flex-1 p-2 border rounded" />
//             <input type="date" className="flex-1 p-2 border rounded" />
//             <input
//               type="text"
//               placeholder="Passengers"
//               className="flex-1 p-2 border rounded"
//             />
//           </div>
//           <div className="flex flex-wrap gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="Fare Type"
//               className="flex-1 p-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Class"
//               className="flex-1 p-2 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Promo Code"
//               className="flex-1 p-2 border rounded"
//             />
//           </div>
//           <button className="w-full bg-blue-500 text-white p-2 rounded">
//             Search
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FlightSearchForm;
