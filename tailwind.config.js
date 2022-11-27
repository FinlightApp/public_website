/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      heroText: ['Hind Madurai'],
      heroTitle: ['Nunito Sans'],
    },
    extend: {
      colors: {
        'whiteHero': 'rgba(255, 255, 255, 0.25)',
        'darkHeroBlue': '#3273DC',
        'lightHeroYellow': '#E7B224',
        'box-shadow': '0px 0px 32px rgba(74, 74, 74, 0.75)',
      },
      height: {
        'hrHeight': '3px'
      }
    },
  },
  plugins: [],
}
