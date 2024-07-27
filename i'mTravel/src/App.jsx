import { useState } from "react";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/Current-weather/CurrentWeather";
// import Forecast from "./components/Forecast/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = response[0].json();
        const forecastResponse = response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="max-w-[1080px] my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* <Forecast /> */}
    </div>
  );
}

export default App;
