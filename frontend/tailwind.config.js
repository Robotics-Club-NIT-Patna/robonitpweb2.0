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
       },
       textColor:{
           'navbarTextColor':'#6ff13e'
       }
    },
  },
  plugins: [],
}