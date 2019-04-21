const path=require("path");

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
    overlay: true
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
      // make source-mapping for js files
      {
        test: /\.js$/,
        use: [
          {
            loader: 'source-map-loader',
            options: {
              enforce: true
            }
          }
        ]
      },
      // copy files
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
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
  }
});
