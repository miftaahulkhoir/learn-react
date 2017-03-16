const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const DashboardPlugin = require('webpack-dashboard/plugin');

const src = path.resolve(__dirname, 'src')


module.exports = {
	entry:`${src}/index.js`,
	output: {
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				enforce:"pre",
				test: /\.js$/,
				exclude:/node_modules/,
				loader: "standard-loader",
			},

			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			}]
	},
	plugins: [
	new HtmlWebpackPlugin(),
	new DashboardPlugin()
	]
}

