/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "henry": ["Henry Sans", "sans-serif"],
        "flipahaus": ["Flipahaus", "sans-serif"],
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

