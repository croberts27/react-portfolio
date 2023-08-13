module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: "#155ed3",
        yellow: "#FFD13C",
        green: "#006863",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
