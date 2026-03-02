import { motion } from "framer-motion";
import { Search, Sun, Moon, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/20 dark:bg-slate-900/40 backdrop-blur-lg shadow-md px-4 sm:px-6 py-4"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 hidden sm:block">
              WeatherForecast
            </h1>
            <h1 className="text-2xl font-bold text-white dark:text-yellow-400 sm:hidden">
              WF
            </h1>
          </div>

          <form
            onSubmit={handleSearch}
            className="flex items-center flex-1 max-w-xs sm:max-w-md lg:max-w-lg 
                     bg-white/30 dark:bg-slate-800 rounded-full px-3 sm:px-4 py-2"
          >
            <Search className="text-gray-700 dark:text-white mr-2" size={18} />
            <input
              type="text"
              placeholder="Search city..."
              className="bg-transparent outline-none text-gray-700 dark:text-white w-full dark:placeholder-white/70 text-sm sm:text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClick={() => setOpenSearch(true)}
            />
          </form>

          <button
            onClick={() => setDark(!dark)}
            className="shrink-0 p-2 rounded-full 
                     bg-white/30 dark:bg-slate-700 
                     hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            {dark ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-yellow-400" size={20} />
            )}
          </button>
        </div>
      </motion.nav>
      {openSearch && (
        <div className="fixed inset-0 bg-black/50 z-10">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold dark:text-white">
                Search City
              </h2>
              <X
                className="cursor-pointer dark:text-white"
                onClick={() => setOpenSearch(false)}
              />
            </div>
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter city name..."
                className="flex-1 px-4 py-2 rounded border outline-none dark:bg-slate-800 dark:text-white"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300 cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
