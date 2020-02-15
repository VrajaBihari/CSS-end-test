const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]',
        },
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'app.css',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
      handlebarsLoader: {}
      }
      }),
      new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.hbs'
      }),
    
  ]
};