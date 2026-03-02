import Navbar from "./components/Navbar";

function App() {
  const handleCitySearch = (city) => {
    console.log("Searching for:", city);
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-white to-indigo-200 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Navbar onSearch={handleCitySearch} />
    </div>
  );
}

export default App;
