const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const baseLoaders = ["css-loader", "postcss-loader", "sass-loader"];
const mode = process.env.NODE_ENV || 'production';

module.exports = {
  entry: { main: './src/index.js', },
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
        test: /\.s?css$/,
        use: [
          mode === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
          ...baseLoaders
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images/'
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
      filename: "style.[contenthash].css",
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
    new HtmlWebpackPlugin({
      template: './src/recent-work.html',
      filename: 'recent-work.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/message-sent.html',
      filename: 'message-sent.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/nav-bar.html',
      filename: 'nav-bar.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new UglifyJsPlugin(),
    new CleanWebpackPlugin('dist', {} ),
    new WebappWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      persistentCache: true,
      inject: true,
      title: 'Wittenbrock Design',
    }),
  ]
};