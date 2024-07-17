/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowzim: {
          primary: '#FFB400',
          secondary: '#C3A73F',
        },
        gray: {
          light: '#F6F6F6',
          medium: '#E8E8E8',
          dark: '#1A2F46',
        },
        black: '#212121',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

