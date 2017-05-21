const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const path = require( "path" );
const buildDir = "dist";

module.exports = {
	entry: './index.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, buildDir )
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
			{ loader: "style-loader" },
			{ loader: "css-loader" }
			]
		}]
	},
	resolve: {
		extensions: [ '.js' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:	"./html.html",
			inject: 	"body",
			filename:	"index.html"
		})
	]
};
