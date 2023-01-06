/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-black',
    'text-white',
    'text-primary',
    'text-secondary',
    'bg-primary',
    'bg-secondary',
    'via-primary',
    'via-secondary',
  ],
  theme: {
    extend: {
      flexBasis: {
        '1/2-6': 'calc(50% - 1.5rem)',
        '1/3-8': 'calc(33% - 2rem)',
      },
      boxShadow: {
        'glass': '0px 0px 32px 0px rgba(74, 74, 74, 0.75)',
        'card': [
          '0px 10px 15px -3px rgba(0,0,0,0.1)'
        ],
        'card-hover': [
          '0px 10px 15px -3px rgba(0,0,0,0.1)',
          '0px 10px 15px -3px rgba(0,0,0,0.1)',
          '0px 10px 15px -3px rgba(0,0,0,0.1)'
        ],
      },
      colors: {
        'grey': {
          'light': '#F6F6F6',
        },
        'primary': '#E7B224',
        'secondary': '#3273DC',
      },
      fontFamily: {
        'body': ['Inter'],
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
