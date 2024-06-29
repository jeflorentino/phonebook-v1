/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellowzim: {
          primary: '#FDC600',
          secondary: '#FFE831',
        },
        gray: {
          light: '#F6F6F6',
          medium: '#E8E8E8',
          dark: '#292929',
        },
        black: '#212121',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

