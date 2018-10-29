const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static/dist'),
    filename: 'bundle.js'
  }
}
