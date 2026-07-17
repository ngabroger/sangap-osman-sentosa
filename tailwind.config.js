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
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
          '50%': { transform: 'translateY(8px)', opacity: 0.5 },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        floatSlow: 'floatSlow 4s ease-in-out infinite',
        bounceDown: 'bounceDown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
