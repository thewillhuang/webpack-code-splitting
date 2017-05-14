import webpack from 'webpack';
import base from './webpack.base.config.babel';

export default Object.assign(base, {
  devServer: {
    overlay: true,
    port: 3000,
  },
  output: Object.assign(base.output, {
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  }),
  devtool: 'eval-cheap-module-source-map',
});
