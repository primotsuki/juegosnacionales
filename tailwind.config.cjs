/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barriecito:['barriecito', 'sans-serif'],
        raleway: ['raleway', 'sans']
      }
    },
    colors: {
      primary: 'black',
      secondary: 'white',
      error: 'red',
      warning: 'yellow',
      emerald: '#059669',
      amber: '#facc15',
      rose: '#be123c',
      obs: '#334155',
      white: 'white',
      indi: '#3730a3',
      gray:{
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
      }
    }
  },
  plugins: [],
}
