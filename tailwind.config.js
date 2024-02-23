/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: { max: "1200px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "478px" },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(110.30deg, rgb(73, 35, 180) 3.247%,rgb(232, 120, 207) 96.826%)",
      },

      colors: {
        blueviolet: "#5027B5",
        litegrey: "#666768",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: ".5s fade ease-in-out",
      },
    },
  },
  plugins: [],
};
