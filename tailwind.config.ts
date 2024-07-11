import { Epilogue } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#2D2D2D",
      white: "#ffffff",
      green: "#009379",
      red: "#FF6250",
      pink: "#F3AFA8",
      grey: "#F3F3F3",
      yellow: "#F7D684",
    },
    fontFamily: {
      epilogue: ["Epilogue", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
