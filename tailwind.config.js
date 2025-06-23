/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Add Roboto as the primary sans-serif font
      },
      colors: {
        darkBlue: 'rgb(21, 59, 90)',
        bitLightBlue: 'rgb(9, 90, 166)',
        lightBlue: 'rgb(0, 92, 188)',
      },
    },
  },
  plugins: [],
}

