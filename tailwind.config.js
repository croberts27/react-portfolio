module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: "#206C0F",
        blue: "#155ed3",
        orange: "rgb(249 115 22)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
