import { O100DailyForecastSummary } from "./O100DailyForecastSummary";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";

export default {
  title: "Organisms/O100DailyForecastSummary",
  component: O100DailyForecastSummary,
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
      control: { type: 'number'}
    },
  },
};

const Template = (args) => <O100DailyForecastSummary {...args} />;
export const Default = Template.bind({});
Default.args = {
  date: '10:00am',
  iconName: 'clear',
  temperature: -2,
}