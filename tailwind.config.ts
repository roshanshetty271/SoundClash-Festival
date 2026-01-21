import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          yellow: "#ccff00",
          pink: "#ff00ff",
          blue: "#00ffff",
        },
        void: "#050505",
        zinc: {
          900: "#18181b",
          800: "#27272a",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      cursor: {
        none: 'none',
      }
    },
  },
  plugins: [],
};

export default config;
