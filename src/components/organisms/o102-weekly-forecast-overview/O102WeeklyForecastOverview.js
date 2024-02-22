import React from "react";
import PropTypes from "prop-types";
import styles from "./O102WeeklyForecastOverview.module.scss";
import { M105VerticalForecastDay } from "../../molecules/m105-vertical-forecast-day/M105VerticalForecastDay";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";
import HourlyWeatherDummyData from "../../../data/HourlyWeatherDummyData";
import KelvinToCelcius from "../../../data/KelvinToCelcius";
import ConvertTimestapToDayMonth from "../../../data/ConvertTimestapToDayMonth";

const dailyList = [
  {
    iconName: iconNames.clear,
    day: "Mon",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[0].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp_max)),
  },
  {
    iconName: iconNames.clouds,
    day: "Tue",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[1].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[1].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[1].main.temp_max)),
  },
  {
    iconName: iconNames.snow,
    day: "Wed",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[2].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[2].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[2].main.temp_max)),
  },
  {
    iconName: iconNames.drizzle,
    day: "Thu",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[3].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[3].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[3].main.temp_max)),
  },
  {
    iconName: iconNames.rain,
    day: "Fri",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[4].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[4].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[4].main.temp_max)),
  },
  {
    iconName: iconNames.thunderstorm,
    day: "Sun",
    date: ConvertTimestapToDayMonth(HourlyWeatherDummyData.list[0].dt).dayMonth,
    minTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp_min)),
    maxTemperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp_max)),
  }
];

const O102WeeklyForecastOverview = () => (
  <div className={styles.weeklyForecastOverview}>
    {dailyList.map((item, index) => (
        <M105VerticalForecastDay {...item} key={index} />
      )
    )}
  </div>
);


O102WeeklyForecastOverview.propTypes = {
};

export { O102WeeklyForecastOverview };
