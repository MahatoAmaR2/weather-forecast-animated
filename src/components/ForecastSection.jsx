import { motion } from "framer-motion";
import ForecastCard from "./ForecastCard";

const ForecastSection = ({ forecast }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-5xl mx-auto mt-12 px-4"
    >
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
        5-Day Forecast
      </h2>

      <div className="
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
        gap-6
      ">
        {forecast.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </motion.div>
  );
};

export default ForecastSection;