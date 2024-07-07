/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xsm':'345px',
        'ssm':'500px',
        'mg':'870px'
      },
      fontFamily : {
        graphik : ['Graphik', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

