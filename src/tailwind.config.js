/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ensure Tailwind scans your files
  ],
  darkMode: 'class', // 👈 enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
