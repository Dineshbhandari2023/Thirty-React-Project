import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./components/shows";

const App = () => {
  const [showData, setShowData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://streaming-availability.p.rapidapi.com/shows/search/batman",
        params: {
          series_granularity: "show",
          show_type: "movie",
          output_language: "en",
        },
        headers: {
          "x-rapidapi-key":
            "ed2fd846ebmshacfc805547cd825p195956jsn0b736c890739",
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setShowData(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error fetching data</p>}
      {showData ? <Show data={showData} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
