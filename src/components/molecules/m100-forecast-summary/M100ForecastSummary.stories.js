import { iconNames } from "../../atoms/a2-icon/A2Icon.data";
import { M100ForecastSummary } from "./M100ForecastSummary";
import FormatWeatherData from "../../../data/FormatWeatherData";
import WeatherDummyData from "../../../data/WeatherDummyData";

const WeatherData = FormatWeatherData(WeatherDummyData);

export default {
  title: "Molecules/M100ForecastSummary",
  component: M100ForecastSummary,
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: iconNames,
    },
    city: {
      control: { type: "text" },
    },
    temperature: {
      control: { type: "number" },
    },
    maxTemperature: {
      control: { type: "number" },
    },
    minTemperature: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => <M100ForecastSummary {...args} />;
export const DailyForecastSummary = Template.bind({});
DailyForecastSummary.args = {
  iconName: WeatherData.iconName,
  city: WeatherData.city,
  temperature: WeatherData.temperature,
  minTemperature: WeatherData.minTemperature,
  maxTemperature: WeatherData.maxTemperature,
};
