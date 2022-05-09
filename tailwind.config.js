module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryColor: "#fa5553",
      grey: "#e5e7eb",
      primaryDarkColor: "#c91c19",
      backgroundColor: "#fffefa",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
