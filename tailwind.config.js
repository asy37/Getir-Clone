/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.1: "0.063rem",
      },
      colors: {
        htext: "#7849f7",
        hcolor: "#f3f0fe",
        textcolor: "#3e3e3e",
        bordercolor: "#1919191a",
        bgcolor: "#fafafa",
        brand: "#4c3398",
        primary: "#5d3ebc",
        text: "#DBDBFF",
        graay: "#838287",
        textfooter: "#525252",
        brandyellow: "#ffd300",
        boldcolor: "#191919",
        textBasket: "#697488",
      },
    },
  },
  plugins: [],
};
