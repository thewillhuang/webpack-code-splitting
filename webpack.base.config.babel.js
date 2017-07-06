import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ForceCaseSensitivity from 'case-sensitive-paths-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';

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

export const babelConfig = {
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
    app1: ['./packages/app1'],
    app2: ['./packages/app2'],
    app3: ['./packages/app3'],
    app4: ['./packages/app4'],
  },
  module: {
    rules: [
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
    path: path.resolve('./dist'),
  },
  plugins: [
    new ForceCaseSensitivity(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlPlugin({
      inject: true,
      template: './template.ejs',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
  },
};
