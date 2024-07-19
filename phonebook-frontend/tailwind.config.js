/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowzim: {
          primary: '#FEC20C',
          secondary: '#FDD554',
        },
        gray: {
          light: '#9FA09C',
          medium: '#5E5E5C',
          dark: '#353736',
        },
        black: '#212121',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

