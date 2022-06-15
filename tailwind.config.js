/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          'light': '#04BF9D',
          'dark': '#253659',
        }
      }
    },
  },
  plugins: [],
}
