const path = require("path"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin");

const extractConfig = ExtractTextPlugin.extract({
	use: [
		"css-loader",
		"postcss-loader",
		"sass-loader"
	],
	fallback: "style-loader",
	publicPath: "../"
});

module.exports = {
	entry: {
		main: "./src/scripts/main.js"
	},
	output: {
		path: path.resolve(__dirname, "frontend"),
		filename: "scripts/[name].bundle.js"
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js"
		}
	},
	module: {
		rules: [
			{
				test: /\.(html|htm)$/,
				use: "html-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								"env"
							],
							plugins: [
								"transform-runtime",
								"transform-class-properties"
							]
						}
					}
				]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					css: extractConfig
				}
			},
			{
				test: /\.(scss)$/,
				use: extractConfig
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/"
						}
					}
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "images/"
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin("frontend"),
		new HtmlWebpackPlugin({
			template: "src/index.html",
			filename: "index.html"
		}),
		new ExtractTextPlugin("styles/[name].bundle.css")
	]
};