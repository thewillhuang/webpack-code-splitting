import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackChunkHash from 'webpack-chunk-hash';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base, { PostCSS, CSSLoaderConfig } from './webpack.base.config.babel';

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
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
      minChunks: 2,
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
  }),
  module: {
    rules: base.module.rules.concat([
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [CSSLoaderConfig(true), PostCSS, {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [CSSLoaderConfig(true), PostCSS],
        }),
      },
    ]),
  },
});
