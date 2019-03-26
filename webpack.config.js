const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

// const baseLoaders = ["css-loader", "postcss-loader", "sass-loader"];
// const mode = process.env.NODE_ENV || 'production';
const devMode = process.env.NODE_ENV !== 'production';

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
    rules: [{
        test: /\.s?css$/,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          {
            // translates CSS into CommonJS
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // Autoprefixer usw.
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
          {
            // compiles Sass to CSS, using Node Sass by default
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
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
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts/'
          }
        }]
      },
      {
        test: /\.html$$/,
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
    new UglifyJsPlugin(),
    new CleanWebpackPlugin('dist', {}),
    new WebappWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      persistentCache: true,
      inject: true,
      title: 'Wittenbrock Design',
    }),
  ]
};