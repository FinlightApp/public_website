/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      heroText: ['Hind Madurai'],
      heroTitle: ['Nunito Sans'],
    },
      colors: {
        'light-gray': '#F6F6F6',
        'dark-gray': '#242526',
        'primary': '#E7B224',
        'secondary': '#3273DC',
        'whiteHero': 'rgba(255, 255, 255, 0.25)',
        'darkHeroBlue': '#3273DC',
        'lightHeroYellow': '#E7B224',
        'box-shadow': '0px 0px 32px rgba(74, 74, 74, 0.75)',
      },
      height: {
        'hrHeight': '3px',
        'LgBgHero': '700px'
      },
      fontSize: {
        title: {
          'font-size': '32px',
          'line-height': '44px',
          'font-weight': '600',
        },
        subheader:{
          'font-size': '20px',
          'line-height': '28px',
          'font-weight': '400'
        }
      }
    },
  },
  plugins: [],
}
