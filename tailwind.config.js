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
      dark: "#373737"
    },
    boxShadow: {
      'box' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [],
};
