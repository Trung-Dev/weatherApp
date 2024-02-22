import React, { useContext } from "react";
import './styles/screen.scss';
import styles from "./App.module.scss";
import WeatherContext from "./WeatherContext";
import { M100ForecastSummary } from "./components/molecules/m100-forecast-summary/M100ForecastSummary";
import { O100DailyForecastSummary } from "./components/organisms/o100-daily-forecast-summary/O100DailyForecastSummary";
import { O102WeeklyForecastOverview } from "./components/organisms/o102-weekly-forecast-overview/O102WeeklyForecastOverview";
import { O103SunPhase } from "./components/organisms/o103-sun-phase/O103SunPhase";
import { O107DailyForecastSummaryDetail } from "./components/organisms/o107-daily-forecast-summary-detail/O107DailyForecastSummaryDetail";


function App() {
  const { weatherData, error, isLoading } = useContext(WeatherContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !weatherData) {
    return <div>Error: {error ? error : 'Something went wrong'}</div>;
  }

  return (
    <>
      <M100ForecastSummary {...weatherData} />
      <O100DailyForecastSummary {...weatherData} />
      <O102WeeklyForecastOverview {...weatherData} />
      <O103SunPhase {...weatherData} />
      <O107DailyForecastSummaryDetail {...weatherData} />
    </>
  );
}

export default App;
