/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem'
      },
      maxWidth: {
        '80': '20rem'
      },
      padding: {
        '1/10': '10%',
      },
      boxShadow: {
        'glass': '0px 0px 32px 0px rgba(74, 74, 74, 0.75)',
      },
      colors: {
        'black': 'rgb(0, 0, 0)',
        'grey': {
          'light': 'rgb(238, 238, 238)',
          'DEFAULT': 'rgb(204, 204, 204)',
          'dark': 'rgb(170, 170, 170)'
        },
        'white': 'rgb(255, 255, 255)',
        'primary': '#E7B224',
        'blue': '#3273DC',
      },
      fontFamily: {
        'h': 'Nunito Sans',
        'p': 'Hind Madurai',
      },
    },
  },
  plugins: [],
}
