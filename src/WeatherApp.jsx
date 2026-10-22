import "./WeatherApp.css";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Joyland",
    feelsLike: 31.79,
    temp: 31.3,
    tempMax: 31.3,
    tempMin: 31.3,
    weather: "clear sky",
    humidity: 43,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="weatherApp">
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
