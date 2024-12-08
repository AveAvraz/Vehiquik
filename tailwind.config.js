/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: ["main", "sanf-serif"],
      general: ["general", "sanf-serif"],
      "circular-web": ["circular-web", "sanf-serif"],
      "robert-medium": ["robert-medium", "sanf-serif"],
      "robert-regular": ["robert-regular", "sanf-serif"],
    },
    colors: {
      blue: {
        0: "#4FB7DD",
        50: "#DFDFF0",
        75: "#DFDFF2",
        100: "#F0F2FA",
        200: "010101",
      },
      violet: {
        100: "#5724FF",
      },
      yellow: {
        100: "#8E983F",
        300: "EDFF66",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
