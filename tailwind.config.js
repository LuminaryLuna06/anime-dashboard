/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background), 1)",
        "background-secondary": "rgba(var(--background-secondary))",
        border: "rgba(var(--border))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        text: "rgba(var(--text))",
        "text-secondary": "rgba(var(--text-secondary), 0.8)",
        "text-third": "rgba(var(--text-third), 0.8)",
        "text-hover": "rgba(var(--text-hover))",
        "text-active": "rgba(var(--text-active))",
        accent: "rgba(var(--accent))",
      },
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in",
        fadeOut: "fadeOut 1s ease-out",
      },
      backgroundImage: {
        SoloLeveling: "url('/sololeveling.webp')",
        Shangrila: "url('/shangrila.webp')",
        Rezero: "url('/rezero.webp')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Add or remove themes here
    darkTheme: "dark", // Set default dark mode theme
  },
};
