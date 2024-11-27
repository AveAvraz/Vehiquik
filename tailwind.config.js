/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: {
        DEFAULT: "2rem",
        lg: "5rem",
      },
      screens: {
        sm: "23rem",
        md: "48rem",
        lg: "75rem",
      },
    },
    screens: {
      sm: "23rem",
      md: "48rem",
      lg: "75rem",
    },
    extend: {
      boxShadow: {
        neon: "0 0 15px #39ff14", // A bright green neon glow
      },
      colors: {
        primary: {
          DEFAULT: "#00f0ff", // Neon Blue as the new primary color
          50: "#e0f8ff",
          100: "#b3f0ff",
          200: "#80e7ff",
          300: "#4ddfff",
          400: "#1ad7ff",
          500: "#00c7e6", // Slightly deeper shade for contrast
          600: "#00a3bf",
          700: "#007f99",
          800: "#005b72",
          900: "#00374c",
        },
        secondary: {
          DEFAULT: "#a020f0", // Neon Purple as the new secondary color
          50: "#f5e0ff",
          100: "#e6b3ff",
          200: "#d780ff",
          300: "#c84dff",
          400: "#b91aff",
          500: "#9e00e6", // Slightly deeper shade for contrast
          600: "#7d00b3",
          700: "#5c0080",
          800: "#3b004d",
          900: "#1a001a",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ... (rest of the colors remain unchanged)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
