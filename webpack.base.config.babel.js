import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ForceCaseSensitivity from 'case-sensitive-paths-webpack-plugin';

export const PostCSS = {
  loader: 'postcss-loader',
  options: {
    plugins() {
      return [
        autoprefixer({ browsers: 'last 2 versions' }),
      ];
    },
  },
};

export const CSSLoaderConfig = production => ({
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: production ? '[sha512:hash:base64:8]' : '[path]___[name]__[local]___[hash:base64:5]',
  },
});

const babelConfig = {
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
};

export default {
  entry: {
    app1: ['./src/tools/app1'],
    app2: ['./src/tools/app2'],
    app3: ['./src/tools/app3'],
    app4: ['./src/tools/app4'],
  },
  module: {
    rules: [
      {
        test: /\.(re|ml)$/,
        use: [babelConfig, {
          loader: 'bs-loader',
          options: {
            module: 'es6',
            errorType: 'warning',
          },
        }],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [babelConfig],
      },
      {
        test: /\.scss$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[sha512:hash:base64:7].[ext]',
        },
      }],
  },
  output: {
    path: path.resolve('./build'),
    publicPath: './build',
    filename: '[name].js',
  },
  plugins: [
    new ForceCaseSensitivity(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.re', '.ml', '.json', '.css', '.scss'],
  },
};
