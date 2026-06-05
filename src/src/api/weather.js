const BASE_URL = "http://localhost:5000"; // ✅ your Express server

async function apiRequest(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Weather Proxy error:", error);
    throw error;
  }
}

export async function fetchWeather(lat, lon) {
  return apiRequest(`/weather?lat=${lat}&lon=${lon}`);
}

export async function fetchForecast(lat, lon) {
  return apiRequest(`/forecast?lat=${lat}&lon=${lon}`);
}