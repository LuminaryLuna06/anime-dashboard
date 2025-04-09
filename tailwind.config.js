/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blossoms: {
          100: "#f9a8d4",
          200: "#f472b6",
          300: "#db2777",
        },
        
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
    themes: ["light", "dark", "cupcake"], // Add or remove themes here
    darkTheme: "dark", // Set default dark mode theme
  },
};
