const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'production',
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    // sourceMapFilename: './public/bundle.js.map',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
