module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test:/\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test:/\.jpg$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
