var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './web_client/app.js',
  output: {
    path: `${__dirname}/main/static`,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', 'jsx', '.scss'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel'],
        include: [path.resolve(__dirname, 'web_client')],
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './web_client'),
      path.resolve(__dirname, './node_modules/bootstrap/scss')
    ]
  }
}
