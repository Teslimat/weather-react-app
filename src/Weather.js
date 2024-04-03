import React from "react";
import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Lagos",
    date: "Wednesday 11:57",
    description: "Moderate rain",
    humidity: 87,
    wind: 7.2,
  };

  return (
    <div className="Weather">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{WeatherData.city}</h1>
            <p className="current-details">
              <span>{WeatherData.date}</span>, {WeatherData.description} <br />
              Humidity: <strong>{WeatherData.humidity}%</strong>, Wind:{" "}
              <strong>{WeatherData.wind}km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span className="current-temperature-value">24</span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="#" target="_blank">
            Teslimat Adeyemi
          </a>{" "}
          and is
          <a href="#" target="_blank">
            {" "}
            on GitHub
          </a>{" "}
          and{" "}
          <a href="#" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
