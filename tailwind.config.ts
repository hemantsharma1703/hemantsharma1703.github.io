import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        navbarShadow: {
          "0%": {
            filter: "blur(40px)",
          },
          "100%": {
            filter: "blur(60px)",
          },
        },
        navbarHover: {
          "0%": {
            "background-color": "rgb(168, 162, 158, 0.0)",
          },
          "50%": {
            "background-color": "rgb(168, 162, 158, 0.3)",
          },
          "100%": {
            "background-color": "rgb(168, 162, 158, 0.6)",
          },
        },
        borderBlink: {
          from: {
            border: "1px solid #898989",
          },
          to: {
            border: "1px solid #262626",
          },
        },
      },
      animation: {
        navbarShadow: "navbarShadow 2s infinite alternate linear",
        navbarHover: "navbarHover 0.8s infinite alternate linear",
        borderBlink: "borderBlink 1s infinite alternate linear",
      },
    },
  },
  plugins: [],
};
export default config;
