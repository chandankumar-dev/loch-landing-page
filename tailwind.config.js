/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "5xl": "0 100px 180px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
