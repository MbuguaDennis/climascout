export default function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="mt-30 rounded-xl bg-[#DFE3DB] p-6 shadow-sm border border-black/5 text-center">
        <h3 className="text-[#560270] font-semibold text-2xl">
          🌦 Current Weather Overview
        </h3>

        <p className="mt-3 text-[#560270]/70">
          Enter a latitude and longitude above to view the current weather conditions.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-30 rounded-xl bg-[#DFE3DB] p-4 shadow-sm border border-black/5">
      <h3 className="text-[#560270] font-semibold text-4xl mb-3 flex items-center gap-2">
        🌦 Current Weather Overview
      </h3>

      <div className="grid grid-cols-3 gap-2 text-sm text-[#560270]">
        <div className="bg-white/60 rounded-md p-4 text-center">
          <p className="text-xs text-[#560270]/60">Temperature</p>
          <p className="font-semibold text-lg">
            {weather.current?.temperature}°C
          </p>
        </div>

        <div className="bg-white/60 rounded-md p-4 text-center">
          <p className="text-xs text-[#560270]/60">Humidity</p>
          <p className="font-semibold text-lg">
            {weather.current?.humidity}%
          </p>
        </div>

        <div className="bg-white/60 rounded-md p-4 text-center">
          <p className="text-xs text-[#560270]/60">Wind Speed</p>
          <p className="font-semibold text-lg">
            {weather.current?.wind_speed} km/h
          </p>
        </div>
      </div>
    </div>
  );
}