module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "0px",
      // => @media (min-width: 0px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "960px",
      // => @media (min-width: 960px) { ... }
    },
  },
  plugins: [],
};
