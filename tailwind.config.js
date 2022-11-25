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
        'darkHeroBlue': 'rgba(50, 115, 220, 1)',
        'lightHeroYellow': 'rgba(231, 178, 36, 1)'
      }
    },
  },
  plugins: [],
}
