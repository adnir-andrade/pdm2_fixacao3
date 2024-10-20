/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '248': '248px',
      },
      height: {
        '48': '48px',
      },
      boxShadow: {
        basic: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'themys-merlot': '#881821',
        'themys-cod-gray': '#161414',
        'themys-dune': '#3a3634',
        'themys-straw': '#cfbe86',
        'themys-tussock': '#c29f41',
        'themys-soft-peach': '#f1e8e8',
      },
    },
  },
  plugins: [],
};
