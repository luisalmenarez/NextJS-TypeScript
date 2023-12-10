// tailwind.config.js
import type { Config } from "tailwindcss";
import { join } from "path";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fca311",
        dark: "#121212",
      },
    },
  },
  plugins: [],
};

module.exports = config;
