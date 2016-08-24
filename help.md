## 掌握到的知识点

- 1、path.resolve 路径导航的功能 最终从头解析到最后一个 生成一个绝对路径
相当于一步步的 cd 指令

PS:"/foo/bar"其中的以/开头的一定是顶级文件夹 相当于硬盘的存在 相对于电脑就只能是 c盘 D盘的存在

"./"开头 表示当前文件夹的下一级

"../"开头 表示回退上一级 然后进入下一级的某个文件夹

".."开头 表示回退上一级

"foo" 直接这样开头 表示进入下一级的foo文件夹


- 2、html-webpack-plugin 是为了生成和注入新版html代码的 自动分配新的chunkhash

- 3、使用webpack-dev-server的话 要小心path的一些路径问题 否则会导致无法显示正确的页面 只能显示目录页的问题（坑了我好久。。。）

- 4、url-loader 是对 file-loader的一个封装，比如 CSS 文件当中有这样的引用:
	
		.demo {
		  background-image: url('a.png');
		}
	
那么对应这样的 loader 配置就能把 a.png 抓出来,并且按照文件大小, 或者转化为 base64, 或者单独作为文件

file-loader 有不弱的定义文件名的功能
``require("file?name=[path][name].[ext]?[hash]!./dir/file.png")``
对应 url-loader 当中如果文件超出体积, 就给一个这样的文件名..


- 5、**打成多个包**有时考虑类库代码的缓存, 我们会考虑打成多个包, 这样不难；比如下边的配置, 首先 entry 有多个属性, 对应多个 JavaScript 包,
然后 commonsPlugin 可以用于分析模块的共用代码, 单独打一个包出来:


		// webpack.config.js
		var webpack = require('webpack');
		var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

		module.exports = {
		  entry: {
		    Profile: './profile.js',
		    Feed: './feed.js'
		  },
		  output: {
		    path: 'build',
		    filename: '[name].js' // Template based on keys in entry above
		  },
		  plugins: [commonsPlugin]
		};


## 特殊模块的 Shim

比如某个模块依赖 window.jQuery, 需要从 npm 模块中将 jquery 挂载到全局
Webpack 有不少的 Shim 的模块, 比如 expose-loader 用于解决这个问题
https://github.com/webpack/docs/wiki/shimming-modules
其他比如从模块中导出变量...具体说明有点晦涩..

手头的两个例子, 比如我们用到 Pen 这个模块,
这个模块对依赖一个 window.jQuery, 可我手头的 jQuery 是 CommonJS 语法的
而 Pen 对象又是生成好了绑在全局的, 可是我又需要通过 require('pen') 获取变量
最终的写法就是做 Shim 处理直接提供支持:

``{test: require.resolve('jquery'), loader: 'expose?jQuery'},``

``{test: require.resolve('pen'), loader: 'exports?window.Pen'},``




