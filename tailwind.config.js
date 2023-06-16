module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f5f7",
          300: "#e6e6e6",
          600: "#7f7f7f",
          900: "#18191f",
        },
        lime: { 500: "#d7df23" },
        light_blue: { 300: "#52c1ff" },
        blue_gray: {
          900: "#2e2e2e",
          "100_33": "#d4d9e833",
          "900_01": "#333545",
        },
        red: {
          500: "#f74646",
          800: "#d61920",
          A200: "#ff5252",
          A200_01: "#f8464a",
          "500_01": "#f84646",
        },
        orange: { 300: "#ffba52", 500: "#ff9900" },
        black: { 900: "#000000", "900_66": "#00000066" },
        white: { A700_01: "#fefefe", A700: "#ffffff" },
        blue: { 400: "#52acff" },
        deep_purple: { A200: "#7552ff" },
        pink: { 300: "#ff5290" },
      },
      fontFamily: { manrope: "Manrope", inter: "Inter" },
      boxShadow: { bs: "0px 30px  40px 0px #d4d9e833" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
