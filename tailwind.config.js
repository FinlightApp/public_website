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
