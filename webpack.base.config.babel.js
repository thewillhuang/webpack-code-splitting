import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    app1: ['./src/tools/app1'],
    app2: ['./src/tools/app2'],
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        babelrc: false,
        plugins: ['transform-runtime'],
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
    path: path.resolve('./build'),
    publicPath: './build',
    filename: '[name].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
};
