/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      margin: {
        '5%': '5%',
      },
      padding:{
        '4%':'4%'
      }
    },
  },
  plugins: [],
}

