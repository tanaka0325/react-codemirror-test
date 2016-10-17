import path from 'path';

module.exports = [
  {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
      path: path.join('dest'),
      filename: 'bundle.js',
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.sass?$/,
          loaders: ['style', 'css', 'sass'],
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
];
