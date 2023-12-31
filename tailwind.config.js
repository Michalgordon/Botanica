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
        lightGray:"#D9D9D9",
        gray: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize:{
        '2.5xl': '26px',
        '3xl': '28px',
        '3.25xl': '30px',
        '4.5xl': '40px',
        '7.5xl': '80px'

      },
    
    height: {
      '54': '13.5rem',
      '143': '35.75rem',
      '150':'37.5rem',
      '200': '50rem'
    },
    width:{
      '29': '7.25rem',
      '54': '13.5rem',
      '90': '22.5rem',
      '94': '23.5rem',
      '112': '28rem'


    },
    gap:{
      '10': '2.5rem',
      '27':'6.75rem',
    },
    rotate: {
      '53': '53deg',
    },
    screens: {
      ss: {'min': '320px', 'max': '620px'}, //mobile
      sm: "620px", //tablet
      md: "1112px", //small desktop
      lg: "1700px", // large desktop
      
    },
    borderRadius:{
      '4xl': "32px"
    }
  },
  },
  plugins: [],
};