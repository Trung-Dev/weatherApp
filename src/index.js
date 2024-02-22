import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/screen.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import FetchWeatherData from "./data/FetchWeatherData";
import WeatherContext from "./WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

function AppRoot() {
  const weatherData = FetchWeatherData();
  return (
    <React.StrictMode>
      <WeatherContext.Provider value={weatherData}>
        <App />
      </WeatherContext.Provider>
    </React.StrictMode>
  );
}
root.render(<AppRoot />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
