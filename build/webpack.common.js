const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // change to .tsx if necessary
  entry: {
    app: './src/app.tsx'
  },
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets/'),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        // 图片格式正则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            // 配置 url-loader 的可选项
            options: {
              // 限制 图片大小 9KB，小于限制会将图片转换为 base64格式
              limit: 10000,
              // 超出限制，创建的文件格式
              // build/images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      },
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.(t|j)sx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },

      // addition - add source-map support
      { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }) 
  ]
}