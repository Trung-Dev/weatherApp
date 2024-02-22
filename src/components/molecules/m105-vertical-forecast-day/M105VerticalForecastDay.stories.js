import { M105VerticalForecastDay } from "./M105VerticalForecastDay";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";

export default {
  title: "Molecules/M105VerticalForecastDay",
  component: M105VerticalForecastDay,
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: iconNames,
    },
    day: {
      control: { type: "text" },
    },
    date: {
      control: { type: "text" },
    },
    maxTemperature: {
      control: { type: 'number'}
    },
    minTemperature: {
      control: { type: 'number'}
    },
    active: {
      control: { type: 'boolean'}
    },
  },
};

const Template = (args) => <M105VerticalForecastDay {...args} />;
export const Default = Template.bind({});
Default.args = {
  date: "10/05",
  day: 'Mon',
  iconName: 'clouds',
  minTemperature: -10,
  maxTemperature: 30,
  active: true,
}