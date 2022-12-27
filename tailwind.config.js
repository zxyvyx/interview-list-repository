/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      lineHeight: {
        minimal: '120%',
        default: '140%',
      },
      letterSpacing: {
        default: '0.005em',
      },
    },
  },
  plugins: [],
};
