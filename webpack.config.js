const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
            test: /\.(sa|sc|c)ss$/,
            use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                      // reloadAll: true,

                    },
                  },
                  {
                      loader: "css-loader",
                      options: {
                          sourceMap: true,
                          // url: true
                      }
                  },
                  'postcss-loader',
                  {
                      loader: "sass-loader",
                      options: {
                          sourceMap: true,
                          // url: false
                      }
                  }
                ]
        },
        {
            test: /\.(jpg|png|ttf|tiff|svg|eot|woff|woff2|gif)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'images',
                name: '[name].[ext]'
            }
        }
    ]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ]
};