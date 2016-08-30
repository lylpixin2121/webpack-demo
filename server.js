var webpackDevServer = require("webpack-dev-server")
var webpack = require("webpack")
var config = require("./webpack.dev.config.js")
var path = require("path")

//每个入口都添加webpack/hot/dev-server
//plugins里增加 new webpack.hotModuleReplacementPlugin()
//配置 hot: true
for(var key in config.entry){
	var entry = config.entry[key];
	entry.unshift('webpack-dev-server/client?http://192.168.50.198:8080/',"webpack/hot/dev-server");
}




config.plugins.push(new webpack.HotModuleReplacementPlugin())

var compile = webpack(config);


var server = new webpackDevServer(compile,{
	// hot : true,
	contentBase: "./",
	stats : {
		colors : true,
		chunks : false
	}
})

server.listen("8080","192.168.50.198",function(){
	console.log("已经在8080端口监听啦")
})

// webpack-dev-server --config ./webpack.dev.config.js --content-base ./ --inline --progress  --host 192.168.50.198