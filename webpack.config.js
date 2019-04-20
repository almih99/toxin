const path=require("path");


const config={
  entry: {
   index: './src/test.pug'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    overlay: true
  },
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
      // copy files
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  }
}

module.exports=config;
