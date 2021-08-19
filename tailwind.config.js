module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2A86E2",
        info: "#8BB6E1",
        secondary: {
          100: "#A6A8AA43",
          200: "#A6A8AA",
          300: "#F7F7F7",
          400: "#A6A8AA",
          500: "#B4D924",
          600: "#193A5C",
        },
        danger: "#D83939",
      },
      fontFamily: {
        body: ["poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
