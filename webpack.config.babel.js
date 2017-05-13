import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
				"babelrc": false,
			  "presets": [
			    ["env", {
			      "targets": {
			        "uglify": true,
			      },
						"modules": false,
			    }],
					"stage-0",
			    "react"
			  ]
			},
			test: /\.jsx?$/,
			exclude: /node_modules/
		}]
	},
	output: {
		path: path.resolve('./build/'),
		publicPath: './build/',
		filename: '[name].js'
	},
	plugins: [
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new webpack.HashedModuleIdsPlugin(),
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
	],
	resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', 'ts', 'tsx'],
  },
};
