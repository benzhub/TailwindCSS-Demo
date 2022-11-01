/* 叫出完整預設的tailwind.config.js => npx tailwindcss init tailwind-full.config.js --full */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Just in Time 模式，加速你的dev開發編譯速度
  mode: 'jit',
  target: 'web',
  // tailwind打包的時候，會先去掃描所有的html去看哪些會使用到tailwind utilities，只會打包使用到的tailwind 
  purge: {
    content: ['./src/**/*.{html,js}'],
    // 強制打包進去production中，讓其他程式可以引用到
    // safelist: [
    //   'text-center'
    // ]
  },
  darkMode: 'class', // or 'media' or 'class', media會用使用者的系統默認的明亮模式，class是讓使用者自己手動切換
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
