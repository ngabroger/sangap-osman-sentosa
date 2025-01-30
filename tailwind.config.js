const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular : ['ubuntu-regular'],
        primaryMedium : ['ubuntu-medium'],
        primaryBold : ['ubuntu-bold'],
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

