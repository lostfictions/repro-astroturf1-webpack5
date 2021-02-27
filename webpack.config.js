const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // standard minimum configuration for persistent caching with webpack 5.
  // see docs at https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[path][name]__[local]",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: ['astroturf/loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}