var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var time = new Date().getTime();
module.exports = {
	entry : {
	    index1 : ["./src/js/index.js"]
	},
	output : {
		path : path.resolve(__dirname,"./dist/static/"),
		// publicPath: 'static/asd', //publicPath是定义文件被打包后的url前缀的
		filename : "[name].[chunkhash].js"
	},
	module : {
		loaders :[
			{test : /\.css$/ , loader : ExtractTextPlugin.extract("style",["css"])},
			{test : /\.scss$/ , loader : ExtractTextPlugin.extract("style",["css","sass"])},
			{test : /\.(jpg|png)$/ , loader : "url-loader?limit = 8192"}
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	filename: '../index.html', // 留意这里，这里的路径是相对来path配置的
	    	template: './src/tpl/demo.html',
	    	inject: true,
	    	// minify : {
	    	// 	collapseWhitespace : true // 压缩所有html的空格
	    	// }
	    }),
	    new ExtractTextPlugin("[name].[chunkhash].css")
	]
}
