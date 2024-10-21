/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.75)',
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.75)',
        lg: '3px 2px 2px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        'themys-merlot': '#881821',
        'themys-cod-gray': '#161414',
        'themys-dune': '#3a3634',
        'themys-straw': '#cfbe86',
        'themys-tussock': '#c29f41',
        'themys-soft-peach': '#f1e8e8',
      },
      fontFamily: {
        'cinzel-regular': ['Cinzel_400Regular'],
        'cinzel-medium': ['Cinzel_500Medium'],
        'cinzel-semibold': ['Cinzel_600SemiBold'],
        'cinzel-bold': ['Cinzel_700Bold'],
        'cinzel-extrabold': ['Cinzel_800ExtraBold'],
        'cinzel-black': ['Cinzel_900Black'],
        'cinzel-decorative-regular': ['CinzelDecorative_400Regular'],
        'cinzel-decorative-bold': ['CinzelDecorative_700Bold'],
        'cinzel-decorative-black': ['CinzelDecorative_900Black'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
