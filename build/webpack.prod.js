const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ],
  },  
  plugins: [
    new CleanWebpackPlugin(),     
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }), 
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
