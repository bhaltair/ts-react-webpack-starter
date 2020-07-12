const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),     
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // split common utils
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        //  split react & redux & react-router-dom to vendor 
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  }
}
