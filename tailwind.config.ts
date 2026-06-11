import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        mono: ["VT323", "Courier New", "monospace"],
        body: ["Special Elite", "serif"],
      },
      colors: {
        upside: {
          red: "#CC0000",
          darkred: "#880000",
          bg: "#080808",
          surface: "#0d0505",
          border: "#1a0a0a",
          text: "#e8e0d0",
          muted: "#666666",
          dim: "#333333",
        },
      },
      animation: {
        flicker: "flicker 3s infinite",
        "flicker-fast": "flicker 1.5s infinite",
        blink: "blink 1s step-end infinite",
        scan: "scan 4s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 89%, 100%": { opacity: "1" },
          "90%": { opacity: "0.3" },
          "92%": { opacity: "1" },
          "94%": { opacity: "0.1" },
          "96%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scan: {
          from: { top: "0%" },
          to: { top: "100%" },
        },
        glowPulse: {
          "0%, 100%": { textShadow: "0 0 20px rgba(204,0,0,0.3), 0 0 40px rgba(136,0,0,0.2)" },
          "50%": { textShadow: "0 0 30px rgba(204,0,0,0.6), 0 0 60px rgba(136,0,0,0.4)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
