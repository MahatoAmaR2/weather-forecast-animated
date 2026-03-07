import { motion } from "framer-motion";
import { Droplets, Wind } from "lucide-react";

const ForecastCard = ({ day }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-md
        rounded-2xl
        p-5
        shadow-lg
        border border-slate-200 dark:border-slate-700
        cursor-pointer
        flex flex-col gap-3
      "
    >
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white text-center">
        {day.date}
      </h3>

      <img
        src={`https://openweathermap.org/img/wn/${day.icon}@4x.png`}
        alt={day.condition}
        className="w-16 h-16 object-contain mx-auto animate-pulse"
      />

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        {day.condition}
      </p>

      <div className="text-center text-xm font-bold text-slate-800 dark:text-yellow-400">
        <span className="text-red-500">{day.max}° </span>/{" "}
        <span className="text-indigo-500">{day.min}° </span>
      </div>

      <div className="flex justify-between text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
        <div className="flex items-center gap-1">
          <Droplets size={14} />
          <span>{day.humidity}%</span>
        </div>

        <div className="flex items-center gap-1 ">
          <Wind size={14} />
          <span>{day.wind} km/h</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ForecastCard;
