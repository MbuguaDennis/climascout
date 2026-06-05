import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = "https://api.weather-ai.co/v1";
const API_KEY = process.env.VITE_WEATHER_AI_KEY;

// Future note: add request validation if exposing publicly

// =======================
// WEATHER ENDPOINT
// =======================
app.get("/weather", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const response = await axios.get(
      `${BASE_URL}/weather`,
      {
        params: { lat, lon },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Weather fetch error:", err.message);
    res.status(500).json({ error: "Weather fetch failed" });
  }
});

// =======================
// FORECAST ENDPOINT
// =======================
app.get("/forecast", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const response = await axios.get(
      `${BASE_URL}/forecast`,
      {
        params: { lat, lon },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Forecast fetch error:", err.message);
    res.status(500).json({ error: "Forecast fetch failed" });
  }
});

// =======================
// START SERVER
// =======================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});