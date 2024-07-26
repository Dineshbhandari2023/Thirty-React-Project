import { useState } from "react";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = response[0].json();
      const forecastResponse = response[1].json();

      setCurrentWeather(weatherResponse);
      setForecast(forecastResponse);
    });
  };
  return (
    <div className="max-w-[1080px] my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />

      <CurrentWeather />
    </div>
  );
}

export default App;
