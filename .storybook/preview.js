import "../src/styles/screen.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "night",
    values: [
      {
        name: "day",
        value: "#81BCFF",
      },
      {
        name: "night",
        value: "#1E1E1E",
      },
    ],
  },
};
