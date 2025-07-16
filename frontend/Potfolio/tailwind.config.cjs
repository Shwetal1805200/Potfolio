/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      colors: {
        brand: {
          black: '#000000',
          purpleDark: '#9929EA',
          purpleLight: '#CC66DA',
          yellowLight: '#FAEB92',
        },
      },
    },
  },
  plugins: [],
};
