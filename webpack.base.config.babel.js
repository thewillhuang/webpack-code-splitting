
import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    app: ['./js/main'],
    f: ['./js/f'],
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          ['env', {
            targets: {
              uglify: true,
            },
            modules: false,
          }],
          'stage-0',
          'react',
        ],
      },
      test: /\.jsx?$/,
      exclude: /node_modules/,
    }],
  },
  output: {
    path: path.resolve('./build/'),
    publicPath: './build/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', 'ts', 'tsx'],
  },
};
