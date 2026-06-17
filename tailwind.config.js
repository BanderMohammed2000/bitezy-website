/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
      },
      colors: {
        // Neutral
        whiteSoft: "#FCF8F3",
        bgMain: "#FBEEE0",
        bgCream: "#FEF7EF",

        // Brand
        primary: "#F85A1C",
        primaryDark: "#CA3C1F",

        // Accent
        orangeAccent: "#F04B2B",

        // Text
        blackSoft: "#111111",
        graySoft: "#6B6B6B",
        goldenOrange: "#FC8D0D",
      },
    },
  },
  plugins: [],
};
