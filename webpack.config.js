const path = require('path')
const HTMLWebpackPlugins = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		publicPath: '',
	},
	devServer: {
		static: path.resolve(__dirname, './build'),
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new HTMLWebpackPlugins({
			template: path.resolve(__dirname, 'public/index.html'),
			favicon: path.resolve(__dirname, 'public/favicon.svg'),
		}),
	],
}
