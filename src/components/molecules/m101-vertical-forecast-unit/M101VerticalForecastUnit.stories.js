import { M101VerticalForecastUnit } from "./M101VerticalForecastUnit";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";
import FormatWeatherData from "../../../data/FormatWeatherData";
import WeatherDummyData from "../../../data/WeatherDummyData";

const WeatherData = FormatWeatherData(WeatherDummyData);

export default {
  title: "Molecules/M101VerticalForecastUnit",
  component: M101VerticalForecastUnit,
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: iconNames,
    },
    date: {
      control: { type: "text" },
    },
    temperature: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => <M101VerticalForecastUnit {...args} />;
export const Default = Template.bind({});
Default.args = {
  date: WeatherData.day.toDateString(),
  iconName: WeatherData.iconName,
  temperature: WeatherData.temperature,
};
