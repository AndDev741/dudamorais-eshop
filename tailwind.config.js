/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx, js}"
  ],
  theme: {
    screens: {
      xs: "200px",
      sm: "400px",
      md: "700px",
      lg: "1100px"
    },
    extend: {
      colors: {
        mainColor: "#B56C62",
        ligthBrown: "#E0C2BE"
      },
      fontFamily: {
        mainFont: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}

