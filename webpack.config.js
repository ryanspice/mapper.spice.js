
require("babel-core/register");

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// html = new HtmlWebpackPlugin({ title: 'Webpack App' });

const env = process.argv.indexOf('--env') === -1 ? false : true;
const source = {
    input:{
        js:'./main.js',
        html:'./src/index.html',
        path:'./src/',
    },

    output:{
        js:"main.js",
        html:"../index.html",
        html404:"../404.html"
    },
	plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      minChunks: Infinity,
	      filename: 'vendor.js'
	    }),
	    new webpack.LoaderOptionsPlugin({
	      minimize: true,
	      debug: false
	    })
	]

}

if (env===true)
{

    source.output.js = "app.min.js";

    source.plugins.push(new webpack.optimize.UglifyJsPlugin({
	      compress: {
            warnings: true,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
	      },
	      output: {
	        comments: false
	      },
	      sourceMap: true
	    })
	);
    source.plugins.push(new webpack.optimize.DedupePlugin() );

    //webpackPlugins.push(new webpackHtmlPlugin({ filename: source.output.html404, template:'./src/404.html' }));
}




module.exports = {
  context: '',
  entry: {
	js:['babel-polyfill', './src/index.js'],
    vendor: ['react']
  },
  output: {
    path: "./bld/",
    filename: source.output.js
  },
  module: {
      rules:[
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'file-loader',
                query: {
                  name: '[name].[ext]'
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader'
                ],
            },

      ]
  },
  resolve: {
    extensions: ['.js'],
	  plugins: [],
	  modules: [
	     './src',
	     'node_modules'
     ]
  },
  plugins:source.plugins,
  devServer: {
        contentBase: './bld',
        hot: false,
        inline: true,
        compress: false,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        }
   }
}
