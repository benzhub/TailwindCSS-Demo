/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind打包的時候，會先去掃描所有的html去看哪些會使用到tailwind utilities，只會打包使用到的tailwind 
  target: 'web',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
