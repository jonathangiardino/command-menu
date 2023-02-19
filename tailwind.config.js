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
      animation: {
        "slide-in": "slideIn 0.1s ease-in-out",
        "slide-in-inverse": "slideInInverse 0.1s ease-in-out",
        "slide-up": "slideUp 0.1s ease-in-out",
        "slide-down": "slideDown 0.1s ease-in-out",
        "fade-out": "fadeOut 0.1s ease-in-out",
        "fade-in": "fadeIn 0.1s ease-in-out",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideInInverse: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
