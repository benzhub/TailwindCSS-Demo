/** @type {import('tailwindcss').Config} */
module.exports = {
  target: 'web',
  // tailwind打包的時候，會先去掃描所有的html去看哪些會使用到tailwind utilities，只會打包使用到的tailwind 
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      }
    }
  },
  variants: {
    extend: {
      ringWidth: ['active']
    },
  },
  plugins: [],
}
