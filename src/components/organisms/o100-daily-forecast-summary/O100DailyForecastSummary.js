import {React, useMemo} from "react";
import PropTypes from "prop-types";
import styles from "./O100DailyForecastSummary.module.scss";
import { M101VerticalForecastUnit } from "../../molecules/m101-vertical-forecast-unit/M101VerticalForecastUnit";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";
import { A5Text } from "../../atoms/a5-text/A5Text";
import getFormattedMonthDay from "../../../data/getFormattedMonthDay";
import HourlyWeatherDummyData from "../../../data/HourlyWeatherDummyData";
import KelvinToCelcius from "../../../data/KelvinToCelcius";
import FormatTimestamp from "../../../data/FormatTimestamp";

  const dailyList = [
    {
      iconName: iconNames.clear,
      date: "Now",
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp)),
    },
    {
      iconName: iconNames.clouds,
      date: FormatTimestamp(HourlyWeatherDummyData.list[0].dt),
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[0].main.temp)),
    },
    {
      iconName: iconNames.snow,
      date: FormatTimestamp(HourlyWeatherDummyData.list[1].dt),
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[1].main.temp)),
    },
    {
      iconName: iconNames.drizzle,
      date: FormatTimestamp(HourlyWeatherDummyData.list[2].dt),
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[2].main.temp)),
    },
    {
      iconName: iconNames.rain,
      date: FormatTimestamp(HourlyWeatherDummyData.list[3].dt),
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[3].main.temp)),
    },
    {
      iconName: iconNames.thunderstorm,
      date: FormatTimestamp(HourlyWeatherDummyData.list[4].dt),
      temperature: Math.round(KelvinToCelcius(HourlyWeatherDummyData.list[4].main.temp)),
    }
  ];

const O100DailyForecastSummary = () => {
  const date = useMemo(() => getFormattedMonthDay(new Date()), []);

  return (
    <div className={styles.centreWrapper}>
      <div className={styles.dailyForecastWrapper}>
          <div className={styles.textWrapper}>
            <A5Text>{dailyList[0].date}</A5Text>
            <A5Text>{date.today}</A5Text>
          </div>
        <div className={styles.dailyForcastContainer}>
          {dailyList.map((item, index) => (
            <M101VerticalForecastUnit {...item} key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

O100DailyForecastSummary.propTypes = {
  iconName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export { O100DailyForecastSummary };