/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F6F6F6',
        'dark-gray': '#242526',
        'primary': '#E7B224',
        'secondary': '#3273DC'
      }
    },
  },
  plugins: [],
}
