import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#e5f3e2",
          DEFAULT: "#42a047",
          dark: "#43a64e",
        },
        weak: {
          light: "#FCD5CE",
          DEFAULT: "#F87171",
          dark: "#C24129",
        },
        fair: {
          light: "#FDE68A",
          DEFAULT: "#FBBF24",
          dark: "#D97706",
        },
      },
    },
  },
  plugins: [],
};

export default config;
