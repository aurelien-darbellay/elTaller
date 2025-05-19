/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-gold",
    "bg-pink",
    "bg-deeppink",
    "bg-deepblue",
    "bg-red",
    "bg-grey",
    "bg-creme",
    "bg-turquoise",
    "bg-deepturquoise",
    "bg-lightturquoise",
  ],
  theme: {
    extend: {
      colors: {
        deepblue: "#24285f",
        gold: "#FF9E01",
        pink: "#ff5b76",
        deeppink: "#fb4e74",
        turquoise: "#00c8a4",
        deepturquoise: "#007c98",
        lightturquoise: "#7eefb1",
        creme: "#fef0c9",
        grey: "#5c5c82",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sigmar: ["Sigmar"],
        inter: ["Inter"],
      },
      fontSize: {
        base: "0.9rem",
      },
      boxShadow: {
        custom: "0px 0px 4px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-none": {
          "text-shadow": "none",
        },
        ".text-shadow-xs": {
          "text-shadow": "0.5px 0.5px 1px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-md": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 1)",
        },
        ".shadow-custom": {
          "box-shadow": "3px 3px 4px rgba(0, 0, 0, 0.8)",
        },
      });
    },
  ],
};
