const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["'Newsreader'", "Georgia", "serif"],
        mono: ["'Space Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        studio: {
          950: "#0c0b0a",
          900: "#141210",
          850: "#1b1916",
          800: "#24211d",
          700: "#38342e",
          600: "#524d44",
          500: "#756e62",
          400: "#a1998b",
          300: "#c7c1b5",
          200: "#e6e2d8",
          100: "#f4f1ea",
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      stone: colors.stone,
      zinc: colors.zinc,
      slate: colors.slate,
      amber: colors.amber,
      orange: colors.orange,
      emerald: colors.emerald,
      indigo: colors.indigo,
      sky: colors.sky,
      studio: {
        950: "#0c0b0a",
        900: "#141210",
        850: "#1b1916",
        800: "#24211d",
        700: "#38342e",
        600: "#524d44",
        500: "#756e62",
        400: "#a1998b",
        300: "#c7c1b5",
        200: "#e6e2d8",
        100: "#f4f1ea",
      },
    },
  },
  plugins: [],
};
