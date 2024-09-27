import React from "react";

const AppointmentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-200 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-orange-600 text-xl font-bold">
            Book Your Appointment
          </h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Enter phone number"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Course
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-600">
                <option>Bachelor in Business Management</option>
                <option>Bachelor in Tourism & Hospitality</option>
                <option>Bachelor in Cyber Security</option>
                <option>Bachelor in Information Technology</option>
                <option>Master in Cyber Security</option>
                <option>Master in Data Science</option>
                <option>M.Sc. in Information Technology</option>
                <option>M.Sc. in Artificial Intelligence</option>
                <option>Master in Human Resources</option>
                <option>Master in Finance</option>
                <option>Master in Entrepreneurship</option>
                <option>Master in Project Management</option>
                <option>Master in Operations Management</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPopup;
