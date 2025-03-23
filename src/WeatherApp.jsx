WeatherApp.jsx;
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bangalore",
    feelslike: 25.15,
    temp: 24.62,
    tempMin: 22.8,
    tempMax: 25.75,
    humidity: 77,
    weather: "broken clouds",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Anusha</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
