import { M102IconTextList } from "./M102IconTextList";
import { iconNames } from "../../atoms/a2-icon/A2Icon.data";

export default {
  title: "Molecules/M102IconTextList",
  component: M102IconTextList,
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: iconNames,
    },
    rainfall: {
      control: { type: "number" },
    },
    humidity: {
      control: { type: "number" },
    },
    windSpeed: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => <M102IconTextList {...args} />;
export const Default = Template.bind({});
Default.args = {
  rainfall: 66,
  humidity: 54,
  windSpeed: 19,
};
