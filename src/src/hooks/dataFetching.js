import { useState } from "react";
import { fetchWeather, fetchForecast } from "../api/weather";
import { analyzeMatch } from "../utils/matchEngine";

export function useMatchData() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMatchData = async (lat, lon) => {
  if (!lat || !lon) {
    throw new Error("Latitude and Longitude are required");
  }

  try {
    setLoading(true);

    const [weatherData, forecastData] = await Promise.all([
      fetchWeather(lat, lon),
      fetchForecast(lat, lon),
    ]);

    const aiResult = analyzeMatch(weatherData, forecastData);

    setWeather(weatherData);
    setForecast(forecastData);
    setAnalysis(aiResult);
  } catch (err) {
    console.error("useMatchData error:", err);
  } finally {
    setLoading(false);
  }
};

  return {
    weather,
    forecast,
    analysis,
    loading,
    getMatchData,
  };
}