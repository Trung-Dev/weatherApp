import { A2Icon } from "./A2Icon";
import { iconNames } from "./A2Icon.data";

export default {
  title: "Atoms/A2Icon",
  component: A2Icon,
  argTypes: {
    iconName: {
      options: Object.keys(iconNames),
      control: {
        type: "select",
      },
    },
  },
};

const Template = (args) => <A2Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: iconNames.clear,
};
