import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class',
    darkTheme: 'class',
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#fff",
        lighter: "#ededed",
        light: "#ccc",
        lightGrey: "#acacac",
        black: "#000",
        dark: "#111",
        darker: "#101010",
        darkGrey: "#777",

        primary: "#1949ff",
        primaryLight: "#87a0ff",
        primaryDark: "#0b034d",

        secondary: "#3fb12e",
        secondaryLight: "#89F978",
        secondaryDark: "#0C5E00",
      },
    },
  },
  plugins: [],
};
export default config;
