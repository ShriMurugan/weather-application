import React, { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = "your_api_key"; // 🔁 Replace with your real API key

  useEffect(() => {
  if (city.length < 3) return;

  const timer = setTimeout(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setWeather(null);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, 800); // wait 800ms after typing

  return () => clearTimeout(timer);
}, [city]);


  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: "0.5rem", fontSize: "16px" }}
      />

      {weather ? (
        <div style={{ marginTop: "1rem" }}>
          <h2>{weather.name}</h2>
          <p>🌡️ Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌥️ Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        city && <p>No data found for "{city}"</p>
      )}
    </div>
  );
}

export default App;
