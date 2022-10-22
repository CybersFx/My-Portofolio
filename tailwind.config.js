/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
      },
      screens: {
        '2xl' : '1320px',
      },
      animation: {
        'bounce-slow' : 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
