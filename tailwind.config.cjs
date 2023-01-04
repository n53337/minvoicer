/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      brown: "rgba(44, 44, 44, 1)",
      "brown-700": "rgba(44, 44, 44, 0.8)",
      "brown-500": "rgba(44, 44, 44, 0.6)",
      "brown-300": "rgba(44, 44, 44, 0.4)",
      "brown-100": "rgba(44, 44, 44, 0.2)",
      white: "rgba(255, 255, 255, 1)",
    },
  },
  plugins: [],
};
