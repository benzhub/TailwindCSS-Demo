const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  // 編譯模式
  // production 模式下編譯，會做tree tracking ，排除不必要的變數和模塊
  mode: 'production', // development | production(production模式下的編譯會壓縮檔案，讓檔案大小更輕量化)
  // 引入的檔案
  entry: './src/index.js',
  // 輸出的檔案
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.[hash].js',
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      // 讓webpack可以載入圖片
      {
        test: /\.(gif|png)/,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  // 插件外掛
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash].css',
    }),
  ],
}
