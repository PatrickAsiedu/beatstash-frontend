/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      colors:{
        'body':'#0a0a09',
        'border-light':'#737373',
        'primary':'#005ff8',
        'body-light':'#404040',
        'text-dark':'#A3A3A3'
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        bebas:['Bebas Neue']
      }
    },
  },
  plugins: [],
}
