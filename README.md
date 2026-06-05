# ⚽ ClimaScout

> Turning weather into match-winning decisions.

ClimaScout is a football match intelligence application powered by the WeatherAI API. It transforms real-time weather and forecast data into actionable football insights, helping teams understand how environmental conditions may affect performance during matches and tournaments.

Rather than simply displaying weather information, ClimaScout analyzes conditions such as temperature, humidity, wind, and rainfall to generate match readiness scores and strategic recommendations.

---

## 📖 About the Project

Football matches are often influenced by environmental factors that are easy to overlook. Extreme heat can reduce player stamina, strong winds can affect passing accuracy, and rain can change pitch conditions.

ClimaScout bridges the gap between weather data and football decision-making by converting weather forecasts into easy-to-understand match intelligence.

This project was built as part of the WeatherAI technical challenge.

---

## ✨ Features

- 🌦 Real-time weather analysis
- 📅 Tournament and match planning using weather forecasts
- ⚽ Match readiness scoring system
- 🧠 Football-focused weather insights
- 🔒 Secure backend integration for API requests
- 📱 Responsive and user-friendly interface

---

## 🛠 Built With

### Frontend

- React
- Tailwindcss
- Vite
- JavaScript (ES6+)
- CSS

### Backend

- Node.js
- Express.js

### API

- WeatherAI Co API

---

## 🏗 Project Architecture

```text
Frontend (React)
        ↓
Express Backend
        ↓
WeatherAI API
```

The backend acts as a secure intermediary between the frontend and the WeatherAI API, keeping API credentials hidden from the client.

---

## 🌦 WeatherAI Endpoints Used

### Current Weather

```http
GET /v1/weather
```

Used to retrieve:

- Temperature
- Humidity
- Wind conditions
- Rain probability
- AI-generated weather summaries

### Forecast

```http
GET /v1/forecast
```

Used for:

- Match preparation
- Training planning
- Tournament scheduling
- Weather trend analysis

---

## 🧠 Match Intelligence Engine

ClimaScout includes a custom match intelligence engine that evaluates weather conditions and translates them into football-related insights.

Examples include:

### Heat Analysis

- High temperatures increase fatigue risk
- Reduced pressing intensity may be recommended

### Humidity Analysis

- High humidity can impact endurance
- Additional hydration may be required

### Wind Analysis

- Strong winds may affect long passes and crosses

### Rain Analysis

- Wet conditions can create slippery pitch surfaces
- Tactical adjustments may be necessary

The engine combines these factors to generate a:

**Match Readiness Score (0–100)**

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-github-username/climascout.git
```

Navigate into the project:

```bash
cd climascout
```

---

## 2. Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd src
npm install
```

---

## 3. Environment Variables

### Backend

Create a `.env` file inside the backend folder:

```env
WEATHER_AI_KEY=your_weather_ai_api_key
PORT=5000
```

### Frontend

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000
```

---

## 4. Run the Application

### Start Backend

```bash
cd backend
node server.js
```

Backend should run on:

```text
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend should run on:

```text
http://localhost:5173
```

---

## 📂 Project Structure

```text
climascout/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🎯 Example Workflow

1. User enters a match location.
2. Frontend sends a request to the backend.
3. Backend requests weather data from WeatherAI.
4. Current weather and forecast data are returned.
5. The Match Intelligence Engine analyzes the conditions.
6. ClimaScout displays:
   - Match Readiness Score
   - Weather Conditions
   - Tactical Insights
   - Tournament Planning Recommendations

---

## 🌍 Deployment

### Frontend

Hosted on Netlify.

### Backend

Hosted on Render.

### Live Demo

Frontend:

```text
https://climascout.netlify.app/
```

Backend:

```text
https://climascoutingapp.onrender.com/
```

---

## 🧩 Challenges & Wins

### Challenges

- Transforming raw weather data into meaningful football insights
- Designing a scoring system that remains simple yet useful
- Connecting frontend and backend services efficiently

### Wins

- Successfully integrated WeatherAI into a real-world sports use case
- Built a full-stack application within the challenge timeframe
- Created a reusable match intelligence engine
- Improved understanding of API integration and application architecture

---

## 📚 What I Learned

This project reinforced the importance of translating raw data into actionable information.

Instead of building a traditional weather dashboard, ClimaScout focuses on helping users make decisions using weather data. The project also provided valuable experience working with third-party APIs, frontend-backend communication, and structuring a full-stack application.

---

## 👨‍💻 Author

**Dennis Mbugua**

GitHub:

```text
https://github.com/MbuguaDennis
```

---

## 🙏 Acknowledgements

- WeatherAI for providing the API and challenge
- The open-source community for the tools and libraries used in development

---

## 📌 Final Thoughts

ClimaScout demonstrates how weather data can be transformed into practical football intelligence.

By combining real-time weather conditions, forecasts, and domain-specific analysis, the application provides a simple but meaningful way to support match preparation and decision-making.