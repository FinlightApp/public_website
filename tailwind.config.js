/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/2-6': 'calc(50% - 1.5rem)',
        '1/3-8': 'calc(33% - 2rem)',
      },
      boxShadow: {
        'glass': '0px 0px 32px 0px rgba(74, 74, 74, 0.75)',
        'card': '0px 0px 32px 0px rgba(74, 74, 74, 0.15)',
      },
      colors: {
        'black': '#242526',
        'white': '#f6f6f6',
        'grey': {
          'light': '#e6e6e6'
        },
        'primary': '#E7B224',
        'secondary': '#3273DC',
      },
      fontFamily: {
        'header': 'Nunito Sans',
        'paragraph': 'Hind Madurai',
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
