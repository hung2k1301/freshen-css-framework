/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{hbs,js}"],
  theme: {
    extend: {
      colors: {
        grey: "#EBEBEB",
        "dark-green": "#41544A",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    minWidth: {
      "search-bar": "746px",
    },
  },
  plugins: [],
};
