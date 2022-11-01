/* 叫出完整預設的tailwind.config.js => npx tailwindcss init tailwind-full.config.js --full */
/** @type {import('tailwindcss').Config} */
module.exports = {
  target: 'web',
  // tailwind打包的時候，會先去掃描所有的html去看哪些會使用到tailwind utilities，只會打包使用到的tailwind 
  content: ['./src/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  // 在做擴展的時候，一定要放在extend裡面，不然會覆蓋原本的設定
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      },
      colors: {
        'fill': '#fff'
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
