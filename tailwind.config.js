/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      
      color: {
        yellow: '#FFBD54',
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    colors: {
      blue: "#717CFF",
      dark: "#373737",
      'danger': "#FF5959",
      'bl': "5C96FF",
      orange: "FA706C",
      green: "70CE88",
      black: "565656",
    },
    boxShadow: {
      'box' : '0px 0px 77px 0px rgba(0, 0, 0, 0.06)',
      'boo' : '0px 6px 42px 0px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [],
};
