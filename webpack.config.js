const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const ManifestPlugin = require('webpack-manifest-plugin');
//const HashOutput = require('webpack-plugin-hash-output');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
	mode: devMode ? 'development' : 'production',
	entry: {
		'vendor': './src/vendor.module.js',
		'app': './src/app.module.js'
	},
	devtool: devMode ? 'source-map': 'none',
	output: {
		filename: 'libs/[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: [
					devMode ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { minimize: true } },
					{ loader: "sass-loader" }
				]
			},
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
			}),
			new OptimizeCssAssetsWebpackPlugin({})
		]
	},
	watch:true,
	plugins: [
		new CleanWebpackPlugin('build'),
		new ManifestPlugin(),
	   new CopyWebpackPlugin(
		  //[ { from: './src/assets/**/*',  force:true } ],
		  [ { from: './src/assets', to:'assets', force:true } ],

		  { copyUnmodified: true }
		),		
		//new HashOutput(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: "styles/[name].[hash].css",
			chunkFilename: "styles/[id].[hash].css"
        }),
		new webpack.HotModuleReplacementPlugin(),
        
	],
	devServer: {
		port: 7000,
        contentBase: './',
		//contentBase: path.resolve(__dirname),
    	//watchContentBase: true,
		historyApiFallback: true,
         watchOptions: {
            poll: true
        }
	}
};

module.exports = config;
