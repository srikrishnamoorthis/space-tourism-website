/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'heading': ['Bellefair'],
            'body-cond': ['Barlow Condensed'],
            'body': ['Barlow Regular']
        },
        colors: {
            'primary': '#0B0D17',
            'secondary': '#D0D6F9',
            'white': '#FFFFFF'
        },
        fontSize: {
            '10xl': '10rem'
        }
    },
  },
  plugins: [],
}
