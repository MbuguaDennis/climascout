export function analyzeMatch(weather, forecast) {
  if (!weather || !weather.current) {
    return {
      score: 0,
      insights: ["No weather data available for analysis"],
    };
  }

  const current = weather.current;

  const temp = current.temperature ?? 20;
  const wind = current.wind_speed ?? 0;
  const humidity = current.humidity ?? 50;

  let score = 100;
  const insights = [];

  // 🌡 Temperature analysis
  if (temp < 8) {
    score -= 25;
    insights.push("Extreme cold may reduce player agility and stamina");
  } else if (temp < 15) {
    score -= 10;
    insights.push("Cool conditions may slightly affect muscle performance");
  } else if (temp <= 28) {
    insights.push("Optimal temperature for football performance");
  } else {
    score -= 20;
    insights.push("High heat may cause dehydration and fatigue risk");
  }

  // 🌬 Wind analysis
  if (wind > 30) {
    score -= 30;
    insights.push("Strong winds will heavily impact ball trajectory and passing accuracy");
  } else if (wind > 20) {
    score -= 15;
    insights.push("Moderate wind may affect long passes and shots");
  } else if (wind > 10) {
    score -= 5;
    insights.push("Light wind with minor impact on gameplay");
  } else {
    insights.push("Calm wind conditions ideal for precise play");
  }

  // 💧 Humidity analysis
  if (humidity > 85) {
    score -= 15;
    insights.push("Very high humidity increases fatigue and reduces endurance");
  } else if (humidity > 70) {
    score -= 8;
    insights.push("High humidity may slightly affect stamina");
  } else {
    insights.push("Comfortable humidity levels for athletes");
  }

  // ⚽ Bonus logic: stable conditions boost score
  if (temp >= 18 && temp <= 26 && wind < 10 && humidity < 70) {
    score += 10;
    insights.push("Perfect match conditions detected");
  }

  // clamp score between 0–100
  score = Math.max(0, Math.min(100, score));

  return {
    score,
    insights,
  };
}