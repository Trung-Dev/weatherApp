import { O103SunPhase } from "./O103SunPhase";

export default {
  title: "Organisms/O103SunPhase",
  component: O103SunPhase,
  timestamp: {
    control: { type: "number" },
  },
};

const Template = (args) => <O103SunPhase {...args} />;
export const Default = Template.bind({});
Default.args = {
  timestamp: 1686579091,
};