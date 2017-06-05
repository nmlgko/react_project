const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const path = require( "path" );
const buildDir = "dist";
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
		// {
		// 	test: /\.css$/,
		// 	exclude: /node_modules/,
		// 	use: [
		// 		{ loader: "style-loader" },
		// 		{ loader: "css-loader" }
		// 	]
		// },
		{
			test:/\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader', 'sass-loader']
			})
    }
	]},
	resolve: {
		extensions: [ '.js' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:	"./html.html",
			inject: 	"body",
			filename:	"index.html"
		}),
		// new ExtractTextPlugin( "./styles.css" )
		new ExtractTextPlugin( "./app.css" )
	]
};
