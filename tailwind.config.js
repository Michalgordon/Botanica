/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#00f6ff",
        green: "#B9FCB3",
        pink: "#FC91FE",
        darkGray: "#616161"
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