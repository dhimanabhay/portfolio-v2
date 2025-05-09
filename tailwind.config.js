/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "react-link-hover": "rgb(0, 120, 223)",
        "react-dark-bg": "rgb(33,33,33)",
        // "react-dark-bg": "#121212",
        // "card-dark-bg": "#1a1c1e",
        "card-dark-bg": "rgb(45, 45, 45)",
        "text-dark": "#fif5f9",
      },
      fontFamily: {
        logo: ['"Dancing Script"'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
