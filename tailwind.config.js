/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "react-link-hover": "rgb(0, 120, 223)",
        "react-dark-bg": "rgb(33, 35, 42)",
      },
      fontFamily: {
        logo: ['"Dancing Script"'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
// 33 35 42
