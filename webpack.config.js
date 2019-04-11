const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //cleans up after ever build
const HtmlWebpackPlugin = require('html-webpack-plugin'); //compresses html code
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //minifies css
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); //uglifies the code
const devMode = process.env.NODE_ENV !== 'production'
const ManifestPlugin = require('webpack-manifest-plugin'); //generates the manifest.json that can be used by other applications
//const HashOutput = require('webpack-plugin-hash-output');
//import elixirConfig from './elixir.json';
const elixirConfig = require('./elixir.json');
//const angularTpl = require('angular-templatecache-loader');

const config = {
	mode: devMode ? 'development' : 'production',
	entry: {
		'vendor': './frontend/vendor.module.js', //seperates all 3rd party plugins like ui-router, retstangualr etc 
		'app': './frontend/index.main.js' //main entry point for angular js
	},
	devtool: devMode ? 'source-map': 'none',
	output: {
		filename: elixirConfig.js + '/[name].[hash].bundle.js',
		//filename: 'libs/[name].[hash].bundle.js', //where to store the generated files all files will be generated inside a folder called libs
		//path: path.resolve(__dirname, 'build')
		path: path.resolve(__dirname, elixirConfig.buildPath)
	},
	module: {
		rules: [
			{
				test: /\.js$/, //check for file that ends with .js extension
				exclude: /node_modules/, //do not check for files inside node_modules folder
				loader: ['ng-annotate-loader', 'babel-loader'],
				//presets: ['es2016'],
			},
			{
				test: /\.(scss)$/, //check for files that end with scss
				use: [
					devMode ? { loader: "style-loader" } : MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { minimize: true } },
					{ loader: "sass-loader" },
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
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, include: /node_modules/, loader: 'html-loader' }
			/*{
				test: /\.(.htm|html)$/,
				exclude: /index.html/, //do not import index.html
				use: {
				  loader: "angular-templatecache-loader?prefix=/public/src&module=app.partials",
				  options: {prefix: './views/app/components/[name].[ext]', module: 'app.partials'}
				}
			}*/
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
	plugins: [
		new CleanWebpackPlugin('build'),
		//new angularTpl(),
		//new ManifestPlugin(),
		//new HashOutput(),
		new HtmlWebpackPlugin({ template: './index.html' }),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: "styles/[name].[hash].css",
			chunkFilename: "styles/[id].[hash].css"
		})
	],
	devServer: {
		port: 3000,
		contentBase: './frontend/',
		historyApiFallback: true
	}
};

module.exports = config;

/*
var app = path.join(__dirname, 'frontend');
module.exports = {
    context: app,
    entry: {
        test: './index.js'
    },
    module: {
        loaders: [
            {
              test: /\.html$/,
              loader: "../../../index.js"
            }
        ]
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        root: app
    }
};
*/
