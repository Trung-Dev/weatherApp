import { A5Text } from "./A5Text";
import { TextStyles, TextWeights } from "./A5Text.data";

export default {
  title: "Atoms/A5Text",
  component: A5Text,
};

const Template = (args) => <A5Text {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  children: "the quick brown fox jumps over the lazy dog",
  style: TextStyles.m,
  weight: TextWeights.normal,
  type: "p",
};

Primary.argTypes = {
  type: {
    control: "text",
  },
  children: {
    control: "text",
  },
  style: {
    options: Object.values(TextStyles),
    control: { type: "radio" },
  },
  weight: {
    options: Object.entries(TextWeights).reduce(
      (options, [label, value]) => ({ ...options, [label]: value }),
      {}
    ),
    control: { type: "radio" },
  },
};
