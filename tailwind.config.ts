import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    corePlugins: {
      preflight: false,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      gold: {
        800: "#D3AB4E",
      },
      silver: {
        800: "#C0C0C0",
      },
      bronze: {
        800: "#B8722E",
      },
      fuchsia: {
        400: "#e879f9",
        500: "#d946ef",
      },
    },
  },
  plugins: [],
};
export default config;
