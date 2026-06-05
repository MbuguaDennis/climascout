import { useState } from "react";
import { useMatchData } from "../../../hooks/dataFetching.js";
import "./Dashboard.css";

import weatherToday from "../../../assets/today's-weather-image.jpg";
import rainyImage from "../../../assets/raining-football-pitch-image.jpg";
import sunnyImage from "../../../assets/sunny-football-pitch-image.jpg";

import Footer from "../../../components/footer.jsx";
import WeatherCard from "../../../components/WeatherCard.jsx";
import InsightsCard from "../../../components/InsightsCard.jsx";
import ScoreCard from "../../../components/ScoreCard.jsx";

function Dashboard() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState("");

  const {
    weather,
    analysis,
    loading,
    getMatchData,
  } = useMatchData();

  const handleSearch = () => {
    if (latitude === "" || longitude === "") {
      setError("Please enter both latitude and longitude.");
      return;
    }

    setError("");
    getMatchData(latitude, longitude);
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 border-white">
      {/* Hero Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center py-4 bg-black w-full ">
        Clima<span className="text-[#FCC302]">Scout </span>Weather Checker
      </h1>

      <header className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8">
        <div className="flex-1 text-center lg:text-left">
          <span className="block text-lg sm:text-2xl lg:text-3xl font-bold text-[#560270] underline decoration-wavy">
            Turning weather into match-winning decisions...
          </span>

          <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
            Know the <span className="text-white">forecast</span>,
            <br />
            plan with confidence
          </p>
        </div>

        <div className="flex-1">
          <img
            src={weatherToday}
            alt="Today's Weather"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </header>

      {/* Image Banner Section */}
      <section className="relative flex flex-col md:flex-row h-[400px] md:h-[600px] overflow-hidden rounded-2xl">
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${rainyImage})` }}
        />

        <div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${sunnyImage})` }}
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-black/60 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-xl text-center">
            <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
              Step into the Pitch Prepared.
            </h1>

            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mt-2">
              Simple Search, Faster Results
            </h2>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Enter Location Latitude eg, -1.2921"
            className="w-full md:flex-1 px-4 py-3 text-sm rounded-md
                       bg-[#DFE3DB] text-[#560270]
                       placeholder:text-[#560270]/50
                       border border-transparent
                       focus:outline-none focus:ring-2 focus:ring-[#FCC302]
                       shadow-sm"
          />

          <input
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Enter Location Longitude eg, 36.8219"
            className="w-full md:flex-1 px-4 py-3 text-sm rounded-md
                       bg-[#DFE3DB] text-[#560270]
                       placeholder:text-[#560270]/50
                       border border-transparent
                       focus:outline-none focus:ring-2 focus:ring-[#FCC302]
                       shadow-sm"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="w-full md:w-auto px-6 py-3 rounded-md
                       bg-[#FCC302] text-[#560270]
                       font-semibold shadow-sm
                       hover:brightness-110
                       active:scale-[0.98]
                       transition cursor-pointer
                       disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing..." : "Get Weather Conditions"}
          </button>
        </div>

        {error && (
          <p className="mt-3 text-red-500 font-medium text-center md:text-left">
            {error}
          </p>
        )}
      </section>

      {/* Dashboard Cards */}
      {(weather || analysis) && (
        <section className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeatherCard weather={weather} />
            <InsightsCard analysis={analysis} />
            <ScoreCard analysis={analysis} />
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;