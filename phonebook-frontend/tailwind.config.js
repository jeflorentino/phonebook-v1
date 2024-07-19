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
        circle: {
          one: '#FF6F59',
          two: '#254441',
          three:'#43AA8B',
          four: '#EF3054',
          five: '#1B8AAC'

        },
        black: '#212121',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

