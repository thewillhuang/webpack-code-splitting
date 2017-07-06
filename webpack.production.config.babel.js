import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackChunkHash from 'webpack-chunk-hash';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PrepackWebpackPlugin from 'prepack-webpack-plugin';
import base, { PostCSS, CSSLoaderConfig } from './webpack.base.config.babel';

const production = true;

export default Object.assign(base, {
  plugins: base.plugins.concat([
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new PrepackWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      child: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ]),
  output: Object.assign(base.output, {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  }),
  module: {
    rules: base.module.rules.concat([
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [CSSLoaderConfig(production), PostCSS, {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [CSSLoaderConfig(production), PostCSS],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[sha512:hash:base64:7].[ext]',
          },
        },
        {
          loader: 'img-loader',
          options: {
            gifsicle: {
              interlaced: false,
            },
            mozjpeg: {
              progressive: true,
              arithmetic: false,
            },
            optipng: false, // disabled
            pngquant: {
              floyd: 0.5,
              speed: 2,
            },
            svgo: {
              plugins: [
            { removeTitle: true },
            { convertPathData: false },
              ],
            },
          },
        }],
      }]),
  },
});
