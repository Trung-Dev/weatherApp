import { iconNames } from "../components/atoms/a2-icon/A2Icon.data";
import WeatherDummyData from "./WeatherDummyData";
import ConvertTimestamp from "./ConvertTimestamp";

const itemList = [
    {
      iconName: iconNames.temperature_outline,
      descriptionText: "min/Min",
      valueText: `${Math.round(WeatherDummyData.main.temp_min)}/${Math.round(WeatherDummyData.main.temp_min)}`,
    },
    {
      iconName: iconNames.rain_outline,
      descriptionText: "Cloud",
      valueText: `${WeatherDummyData.clouds.all}%`,
    },
    {
      iconName: iconNames.wind_outline,
      descriptionText: "Haze",
      valueText: `${WeatherDummyData.wind.speed}%`,
    },
    {
      iconName: iconNames.sunset_outline,
      descriptionText: "Sun rise",
      valueText: `${ConvertTimestamp(WeatherDummyData.sys.sunrise).hour}:${ConvertTimestamp(WeatherDummyData.sys.sunrise).minutes}${ConvertTimestamp(WeatherDummyData.sys.sunrise).period}`,
    },
    {
      iconName: iconNames.sunset_outline,
      descriptionText: "Sun set",
      valueText: `${ConvertTimestamp(WeatherDummyData.sys.sunset).hour}:${ConvertTimestamp(WeatherDummyData.sys.sunset).minutes}${ConvertTimestamp(WeatherDummyData.sys.sunset).period}`,
    },
    {
      iconName: iconNames.humidity_outline,
      descriptionText: "Drop",
      valueText: `${WeatherDummyData.main.humidity}%`,
    },
  ];

  export { itemList }