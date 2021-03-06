const path=require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => (
{
  // argv.mode === 'production' for check
  
  entry: {
   index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    overlay: true,
    contentBase: './dist',
    index: 'index.html' // 'ui-kit.html'
  },
  devtool: argv.mode === 'production' ? false : 'inline-source-map',
  module: {
    rules: [
      // transform pug files
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              globas: ['require']
            }
          }
        ]
      },
      // transform less files
      {
        test: /\.less$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: argv.mode === 'production' ? false : true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: argv.mode === 'production' ? false : true
            }
          }
        ]
      },
      // load css files
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      // make translating for js files
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: 'node_modules',
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      // copy files
      {
        test: /fonts\/.+\.(eot|otf|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|(?<!fonts\/.+)\.svg$|\.wav$|\.mp3$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ] 
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
      })
  ]
});
