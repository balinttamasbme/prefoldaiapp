import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "prefold-dark": "#1A120B",
        "prefold-surface": "#3C2A21",
        "prefold-accent": "#D5CEA3",
        "prefold-light": "#E5E5CB"
      }
    }
  },
  plugins: []
};

export default config;
