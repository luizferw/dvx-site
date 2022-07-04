/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      smd: '500px',
      md: '768px',
      lmd: '950px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {}
  },
  plugins: []
}
