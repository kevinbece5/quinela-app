const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", './src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  //this will handle all the react code to be bundled right
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  //hot reloafer
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'dist/index.html'
  //   })
  // ],
  //When running npm start the output of dev server will be to this folder
  // devServer: {
  //   contentBase: './dist',
  //   historyApiFallback: true,
  // }
};