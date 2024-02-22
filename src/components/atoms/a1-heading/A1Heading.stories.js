import { A1Heading } from "./A1Heading";
import { HeadingStyles, HeadingTypes, HeadingWeights } from "./A1Heading.data";

export default {
  title: "Atoms/A1Heading",
  component: A1Heading,
};

const Template = (args) => <A1Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: HeadingStyles.h1,
  type: HeadingTypes.h1,
  weight: HeadingWeights.normal,
  children: "the quick brown fox jumps over the lazy dog",
};

Primary.argTypes = {
  children: {
    control: "text",
  },
  style: {
    options: Object.values(HeadingStyles),
    control: { type: "radio" },
  },
  type: {
    options: Object.values(HeadingTypes),
    control: { type: "select" },
  },
  weight: {
    options: Object.entries(HeadingWeights).reduce(
      (options, [label, value]) => ({ ...options, [label]: value }),
      {}
    ),
    control: { type: "radio" },
  },
};
