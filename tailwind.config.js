/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: '#B3C93C',
        mainBlack: '#231F20'
      }
    },
  },
  plugins: [],
}