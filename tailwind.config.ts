import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: "#d4a373",
        blush: "#fff8f5",
        espresso: "#2d2926",
        "rose-gold": "#b76e79",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
