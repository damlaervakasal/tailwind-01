/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      // boylelikle her container classın
      // içine mx-auto yazmaktan kurtulmuş oluuyoruz
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "deym-red": "#BC1A45",
        "deym-melon": "#FFD369",
        "deym-grey": "#DDDDDD",
        "deym-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
