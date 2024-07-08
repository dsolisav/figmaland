/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Added custom screen sizes to improve responsive features 
      screens : {
        'xsm':'345px',
        'ssm':'500px',
        'mg':'870px'
      },
      // Added Graphik as default font 
      fontFamily : {
        graphik : ['Graphik', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

