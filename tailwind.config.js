module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#5F55AF",
        yellow: "#FFD13C",
        green: "#006863",
        teal: "#00D7CE",
        silver: "#CDE4FE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
