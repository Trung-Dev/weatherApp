import { M106VerticalForecastSum } from "./M106VerticalForecastSum";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";

export default {
  title: "Molecules/M106VerticalForecastSum",
  component: M106VerticalForecastSum,
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: iconNames,
    },
    descriptionText: {
      control: { type: "text" },
    },
    valueText: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => <M106VerticalForecastSum {...args} />;
export const Default = Template.bind({});
Default.args = {
  iconName: iconNames.rain_outline,
  descriptionText: "Cloud",
  valueText: "25%",
};