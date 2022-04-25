module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  purge: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["'DM Sans'"],
        roboto: ["'Roboto'"],
      },
      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        grayDA: "#DADADA",
        gray33: "#333"
      },
      gridTemplateColumns: {
        work: "1fr auto 1fr auto 1fr ",
      }
    },
  },
  plugins: [],
}
