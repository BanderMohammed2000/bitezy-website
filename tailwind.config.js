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
        bgSoft: "#EDDDCD",
        bgOutside: "#E1C4B2",

        // Brand
        primary: "#F85A1C",
        primaryHover: "#C68150",
        primaryLight: "#E09F77",
        primaryDark: "#CA3C1F",

        // Accent
        yellowAccent: "#D89E00",
        greenAccent: "#81BF54",
        purpleAccent: "#8989E1",
        orangeAccent: "#F04B2B",

        // Text
        blackSoft: "#111111",
        graySoft: "#6B6B6B",
        goldenOrange: "#FC8D0D",

        // Food tones
        brownAccent: "#543128",
      },
    },
  },
  plugins: [],
};
