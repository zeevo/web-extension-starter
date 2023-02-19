/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {},
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    darkTheme: "night",
  },
};
