const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['ubuntu-regular'],
        primaryMedium: ['ubuntu-medium'],
        primaryBold: ['ubuntu-bold'],
        secondaryBold: ['zonapro-bold'],
        secondaryLight: ['zonapro-light'],
      },
      keyframes: {
        scroll: {
          '100%': { transform: 'translate(calc(-50% - 0.50rem), 0)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
