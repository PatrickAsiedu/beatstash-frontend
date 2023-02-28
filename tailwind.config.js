/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        'body':'#0a0a09',
        'primary':'#005ff8',
        'body-light':'#141414'
      },
      fontFamily:{
        poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
