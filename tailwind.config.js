/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#1E1E1E",
        "gray-70": "#383838",
        "gray-80": "#393939",
        "gray-90": "#262626",
        "gray-100": "#161616",
        "green-80": "#044317",
        "purple-60": "#8a3ffc",
      },
      dropShadow: {
        custom: "0px 16px 70px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
