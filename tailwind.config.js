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
      },
      keyframes: {
        slideBorder: {
          '0%': {width: '0%'},
          "100%": {width: '100%'},
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        slideBorder: 'slideBorder 0.5s ease-in-out forwards',
        fadeIn: "fadeIn 1s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

