import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import { transform } from "next/dist/build/swc";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.html",
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

    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },

  plugins: [addDynamicIconSelectors()],
};
export default config;
