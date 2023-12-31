import path from "node:path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  env: (config) => ({
    ...config,
    HOLIDAYS_API_KEY: process.env.HOLIDAYS_API_KEY as string,
  }),
  async webpackFinal(config) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/assets": path.resolve(__dirname, "../src/assets"),
        "@/components": path.resolve(__dirname, "../src/components/"),
        "@/constants": path.resolve(__dirname, "../src/constants/"),
        "@/features": path.resolve(__dirname, "../src/features/"),
        "@/hocs": path.resolve(__dirname, "../src/hocs/"),
        "@/hooks": path.resolve(__dirname, "../src/hooks/"),
        "@/utils": path.resolve(__dirname, "../src/utils/"),
      };
    }
    return config;
  },
  previewHead: (head) => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  `,
};
export default config;
