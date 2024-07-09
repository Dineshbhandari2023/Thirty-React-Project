import React, { useState } from "react";

function DatePicker({ selectedDate, onDateChange }) {
  const [date, setDate] = useState(selectedDate);

  const handleChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <input
      type="date"
      value={date}
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
}

export default DatePicker;
