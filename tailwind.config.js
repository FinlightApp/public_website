/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glass': '0px 0px 32px 0px rgba(74, 74, 74, 0.75)',
      },
      colors: {
        'light-gray': '#F6F6F6',
        'dark-gray': '#242526',
        'primary': '#E7B224',
        'secondary': '#3273DC',
        'light-Black' :'#242424'
      },
      fontFamily: {
        'header': 'Nunito Sans',
        'paragraph': 'Hind Madurai',
      },
    },
  },
  plugins: [],
}
