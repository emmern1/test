const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + "/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/assets/",
		publicPath: "/assets/"
	},
	
	module: {
		loaders: [
			/*{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},*/
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' })},
		
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}	
			}
			/*{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			}*/

		]
	},

	plugins: [
		new ExtractTextPlugin('style.css')
	]
}
