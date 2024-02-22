const jsonImporter = require('node-sass-json-importer');
const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: { fullySpecified: false },
    });

    config.resolve.modules.push(path.resolve('./src'));

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              importer: jsonImporter(),
            },
            additionalData: `@import "styles/utils.scss";`,
          },
        },
      ],
    });

    return config;
  },
};
