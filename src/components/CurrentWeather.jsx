import { motion } from "framer-motion";
import { Wind, Droplets } from "lucide-react";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        w-full max-w-3xl mx-auto mt-10
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-lg
        rounded-3xl
        shadow-xl
        p-8
        border border-slate-200 dark:border-slate-700
      "
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
        {weather.city}
      </h2>

      <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
        <p className="text-6xl sm:text-7xl font-extrabold text-slate-800 dark:text-yellow-400">
          {weather.temp}°C
        </p>

       <div className="flex gap-1 items-center ">
         <p className="text-lg text-slate-600 dark:text-slate-300">
          {weather.condition}
        </p>

        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.condition}
          className="w-20 h-20 animate-pulse"
        />
       </div>
      </div>

      <div className="flex justify-between mt-8 text-slate-700 dark:text-slate-300 flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Droplets size={18} />
          <span>Humidity: {weather.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <Wind size={18} />
          <span>Wind: {weather.wind} km/h</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
