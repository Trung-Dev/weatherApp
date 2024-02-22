import { TextStyles } from "../atoms/a5-text/A5Text.data";
import { Text } from "../atoms/a5-text/A5Text";

const colors = [
  "blue-600",
  "blue-500",
  "blue-400",
  "blue-300",
  "blue-200",
  "blue-100",
  "gray-900",
  "gray-800",
  "gray-400",
  "gray-300",
  "gray-200",
  "white",
  "yellow",
  "green-400",
  "green-500",
  "red-500",
];

export const Colors = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 190px)",
      gridGap: "10px",
      gridAutoRows: "100px",
    }}
  >
    {colors.map((color) => (
      <div key={color} style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            backgroundColor: `var(--color-${color})`,
          }}
        />
        <Text style={TextStyles.xs} type="span">
          --color-{color}
        </Text>
      </div>
    ))}
  </div>
);

export default {
  title: "Theme/Color",
  component: Colors,
};

const Template = (args) => <Colors {...args} />;
