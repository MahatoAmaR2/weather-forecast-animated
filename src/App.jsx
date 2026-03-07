import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather.jsx";
import ForecastSection from "./components/ForecastSection.jsx";
import useWeather from "./hooks/useWeather.js";
import Footer from "./components/Footer.jsx";

function App() {
  const { weather, forecast, loading, error, searchCity } = useWeather();

  return (
    <div className="min-h-screen bg-linear-to-r from-white to-indigo-200 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Navbar onSearch={searchCity} />
      {loading && (
        <p className="text-center mt-10 text-white text-lg">
          Loading weather data...
        </p>
      )}
      {error && (
        <p className="text-center mt-10 text-red-500 text-lg">{error}</p>
      )}

      {weather && <CurrentWeather weather={weather} />}
      {forecast.length > 0 && <ForecastSection forecast={forecast} />}
      <Footer/>
    </div>
  );
}

export default App;
