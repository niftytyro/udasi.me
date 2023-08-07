/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
    colors: {
      black: "#101010",
      white: "#FCFCFC",
      gray: "#B9B9B9",
      gray10: "#D9D9D9",
      darkGray: "#181818",
      darkGray10: "#262626",
      blue: "#4DABEE",
      "jupiter-accent": "#FC7A69",
      "vidpedia-accent": "#FDFC47",
    },
    fontFamily: {
      sans: ["Work Sans Variable", "sans-serif"],
    },
  },
  plugins: [],
};
