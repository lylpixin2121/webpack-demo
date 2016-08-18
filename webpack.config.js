var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var time = new Date().getTime();
module.exports = {
	entry : "./src/js/index.js",
	output : {
		path : path.resolve(__dirname,"./dist/static"),
		publicPath: 'static/asd', //publicPath是定义文件被打包后的url前缀的
		filename : "[name]." + time + "_[chunkhash].js"
	},
	module : {
		loaders :[
			{test : /\.css$/ , loader : "style!css"},
			{test : /\.scss$/ , loader : "style!css!sass"}
		]
	},
	plugins: [
	    new HtmlWebpackPlugin()
	]
}
// {
// 	      chunks: ['main'],
// 	      filename: '../index.html',  // 留意这里，这里的路径是相对来path配置的
// 	      template: './src/tpl/index.html',
// 	      inject: true
// 	    }