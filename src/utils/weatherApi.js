const API_KEY = "81d6ce8337c3df48431e51fb4ac3b4c5";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
};

export const fetchForecast = async (city) => {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
  );

  if (!res.ok) {
    throw new Error("Forecast not available");
  }

  return res.json();
};

export const fetchCitySuggestions = async (query) => {
  if (!query) return [];

  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`,
  );

  if (!res.ok) return [];

  return res.json();
};
