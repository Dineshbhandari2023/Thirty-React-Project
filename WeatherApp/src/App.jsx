import { useState } from "react";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(",");

    const trimmedLat = lat.trim();
    const trimmedLon = lon.trim();

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${trimmedLat}&lon=${trimmedLon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${trimmedLat}&lon=${trimmedLon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        if (weatherResponse.cod === 200 && forecastResponse.cod === "200") {
          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forecastResponse });
        } else {
          console.error(
            "Error fetching weather data:",
            weatherResponse,
            forecastResponse
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[1080px] my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
