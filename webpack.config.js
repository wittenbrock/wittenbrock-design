const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
require("babel-register");

const baseLoaders = ['css-loader', 'postcss-loader', 'sass-loader'];
const mode = process.env.NODE_ENV || 'production';

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          ...baseLoaders
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          }
        }, ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.html$/,
        loader: 'html-srcsets-loader',
        options: {
          attrs: ['img:src', ':srcset'],
        },
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    }),
    new CleanWebpackPlugin(),
    new WebappWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      cache: true,
      prefix: 'favicons',
      inject: true
    }),
  ]
};