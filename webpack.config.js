const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'eslint-loader'
    }],
    loaders: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel',
      query: {
        optional: ['runtime']
      }
    }, {
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src/components')
    }, {
      test: /\.less$/,
      loader: 'style!css?sourceMap!less?sourceMap=true'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
