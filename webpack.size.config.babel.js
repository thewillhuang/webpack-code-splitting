import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import prod from './webpack.production.config.babel';

export default Object.assign(prod, {
  plugins: prod.plugins.concat([
    new BundleAnalyzerPlugin(),
  ]),
});
