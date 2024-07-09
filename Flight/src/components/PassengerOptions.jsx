import React from "react";

function PassengerOptions({ options, setOptions }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="mb-2">
        <label>Adults</label>
        <input
          type="number"
          name="adults"
          value={options.adults}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          min="1"
        />
      </div>

      <div className="mb-2">
        <label>Children</label>
        <input
          type="number"
          name="children"
          value={options.children}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          min="0"
        />
      </div>

      <div className="mb-2">
        <label>Infants</label>
        <input
          type="number"
          name="infants"
          value={options.infants}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          min="0"
        />
      </div>

      <div className="mb-2">
        <label>Travel Class</label>
        <select
          name="travelClass"
          value={options.travelClass}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Economy">Economy</option>
          <option value="Premium Economy">Premium Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>
    </div>
  );
}

export default PassengerOptions;
