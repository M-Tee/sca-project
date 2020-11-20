import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  // debug: true,
  mode: 'development',
  devtool: 'inline-source-map',
  //silence the noise
  // noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  //path to bundled file, saved in memory
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader'] },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  }
}
