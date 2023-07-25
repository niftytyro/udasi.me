/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#101010",
      white: "#FCFCFC",
      gray: "#B9B9B9",
      "vidpedia-accent": "#FDFC47",
      "jupiter-accent": "#FC7A69",
    },
    fontFamily: {
      sans: ["Work Sans Variable", "sans-serif"],
    },
  },
  plugins: [],
};
