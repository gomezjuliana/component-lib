module.exports = {
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, loader: ['css-loader', 'sass-loader'] }
    ]
  }
};
