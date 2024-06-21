/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./content/**/*.md', './content/**/*.html', './layouts/**/*.html'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      serif: ['Outfit', 'sans-serif'],
      sans: ['Inter', 'sans-serif',]
    },
    extend: {
      colors: {
        primary: {
          50: '#EBF8FF',
          100: '#D0EBFB',
          200: '#ACDAF6',
          300: '#90CDF4',
          400: '#63B3ED',
          500: '#4299E1',
          600: '#347BBE',
          700: '#2C4F7C',
          800: '#243956',
        },
        secondary: {
          50: '#EEFFF9',
          100: '#D0FFEE',
          200: '#A7FADC',
          300: '#7CF3C8',
          400: '#51E1B3',
          500: '#37CD9A',
          600: '#1B9F71',
          700: '#007048',
          800: '#005A3A',
        },
      },
      boxShadow: {
        '3xl': '8px 8px 0px 0px rgba(208, 213, 221, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
