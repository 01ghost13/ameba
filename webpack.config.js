var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './ameba/static/js/index.js',
  output: {
    path: path.resolve('./ameba/static/webpack_bundles/'),
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
};