/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#00F6FF",
        green: "#B9FCB3",
        pink: "#FC91FE",
        yellow: "#FEE691",
        darkGray: "#616161",
        lightGray:"#D9D9D9"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize:{
        '3xl': '28px'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};