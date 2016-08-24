var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var time = new Date().getTime();

module.exports = {
  entry : {
    index : ["./src/js/index.js"]
  },
  output : {
    path : path.resolve(__dirname,"./dist/static/"),
    // publicPath: '/static', //publicPath是定义文件被打包后的url前缀的
    filename : "[name].js"
  },
  module : {
    loaders :[
      {test : /\.css$/ , loader : "style!css"},
      {test : /\.scss$/ , loader : "style!css!sass"},
      {test : /\.(jpg|png)$/ , loader : "url-loader?limit = 8192"}
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        chunks: ['index'],
        filename: './index.html', // 留意这里，这里的路径是相对来path配置的
        template: './src/tpl/demo.html',
        inject: true,
        // minify : {
        //  collapseWhitespace : true // 压缩所有html的空格
        // }
      })
  ]
}



