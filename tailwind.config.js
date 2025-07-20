// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // adjust to your project structure
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        loadIn: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        loadIn: "loadIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
