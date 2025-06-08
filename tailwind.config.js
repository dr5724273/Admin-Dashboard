/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable dark mode toggling with class
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
