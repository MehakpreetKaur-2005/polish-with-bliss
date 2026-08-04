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
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        // Duration matches SLIDE_INTERVAL_MS in src/data/heroSlides.ts.
        kenburns: "kenburns 6s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        // Duration matches SERVICE_SLIDE_INTERVAL_MS in src/data/services.ts.
        progress: "progress 6s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
