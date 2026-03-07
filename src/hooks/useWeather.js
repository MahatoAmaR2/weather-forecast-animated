import { useEffect, useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "../utils/weatherApi.js";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCity = async (city) => {
    try {
      setLoading(true);
      setError("");

      const currentData = await fetchCurrentWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather({
        city: currentData.name,
        temp: currentData.main.temp,
        condition: currentData.weather[0].main,
        humidity: currentData.main.humidity,
        wind: currentData.wind.speed,
        icon: currentData.weather[0].icon,
      });
      const dailyData = forecastData.list.filter((_, index) => index % 8 === 0);

      setForecast(
        dailyData.slice(0, 5).map((item) => ({
          date: new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          condition: item.weather[0].main,
          max: item.main.temp_max,
          min: item.main.temp_min,
          humidity: item.main.humidity,
          wind: item.wind.speed,
          icon: item.weather[0].icon,
        })),
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    searchCity("Kolkata");
  }, []);
  return { weather, forecast, loading, error, searchCity };
};

export default useWeather;
