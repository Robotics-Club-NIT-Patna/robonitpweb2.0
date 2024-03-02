/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       width:{
         'widthOne':'26rem',
         'custom-width-small':'80rem', 
       },
       backgroundColor:{
          'customPink':'#f84b87',
          'customBlueOne':'#0ea5e9',
          'customBlueTwo':'#60a5fa',
          'neonGreen': '#a6fd29',
          'neonBlue': '#55ffe1',
          'customBlack': '#1D1D1D'
       },
       textColor:{
           'navbarTextColor':'#6ff13e',
           'neonBlue': '#55ffe1',
           'customPink':'#f84b87',


       },
       backgroundImage:{
          'bg1':'url("https://familyindustrieslive.com/wp-content/uploads/2023/06/IMG_2767-2.jpg")',
          'bg1':'url("https://familyindustrieslive.com/wp-content/uploads/2023/06/IMG_2767-2.jpg")',
          'bg1':'url("https://familyindustrieslive.com/wp-content/uploads/2023/06/IMG_2767-2.jpg")'
       },
       fontSize:{
           'customFont':'15rem'
       },
       zIndex:{
        'customZ': '100',
       },
    },
  },
  plugins: [],
}