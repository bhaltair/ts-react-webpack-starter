module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
    ]
  }
}
