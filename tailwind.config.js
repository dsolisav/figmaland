/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'ssm':'500px',
      },
      fontFamily : {
        graphik : ['Graphik', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

