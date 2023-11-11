import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js",
    "./node_modules/@nextui-org/theme/dist/components/dropdown.js",
    "./node_modules/@nextui-org/theme/dist/components/avatar.js",
    "./node_modules/@nextui-org/theme/dist/components/input.js",
    "./node_modules/@nextui-org/theme/dist/components/checkbox.js",
  ],
  theme: {
    extend: {
      colors: {
        muted: {
          foreground: "hsl(215.4 16.3% 46.9%)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
