
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: "#f6f4ef",
        secondary:"#E5D0AC",
        accent:"#A31D1D",
        optional:"#6D2323"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

