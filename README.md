# webpack-demo

相比于gulp，优点：

- 1、webpack在构建具备版本管理能力的项目方面，更优秀一些，天生自带的chunkhash 是其优势
- 2、结合万物皆模块的思想，在资源打包这块做的更彻底和完美
- 3、webpack的模块化 可以使我们很方便的使用commonJS规范来组织代码 写代码更带感
- 4、扩展性强，插件机制完善，特别是支持 React 热插拔的功能让人眼前一亮。
- 5、可以通过配置，打包成多个文件。有效利用浏览器的缓存功能提升性能。
- 6、支持模块加载器和插件机制，可对模块灵活定制。特别是我最爱的babel-loader，有效支持ES6。
- 7、内置有source map，即使打包在一起依旧方便调试。

缺点：

- 1、webpack在管理模块，处理众多资源中表现出众，但唯独在处理html上比较困难，不能识别html中img标签src引入的图片，因此经常会导致图片读取错误等问题，html-webpack-plugin这种插件辅助处理html非常好，但却仍然未解决html代码中的图片问题，这个问题可以采用html-withimg-loader来处理



``module.loaders`` : 最重要的一环节，模块加载器，以数组形式支持，告知webpack每种文件用什么加载器来处理 

常用的加载器有：
1、处理css常用的style-loader和css-loader
2、处理图片转base64的有url-loader,目前测试支持转通过脚本写入或者是require css里的内容

> PS: 常常将loader和plugin的概念混淆，这里做下区分，其实本身webpack只处理javascrpit也就跟我们平时见到的诸多加载器并无二样，但是强大的地方就在于其万物皆模块的思想；要想将其他资源整合成模块处理，就需要一套转换机制，而正好loader就是帮我们处理这个东西；

``plugin`` : 插件在处理工作流上会更优秀一些，与loader相辅相成,完成 loader 不能完成的任务。


通过webpack.dev.config.js来搭建webpack的开发环境 去除编译环节 减少编译负担 增加开发效率

使用html-withimg-loader来处理文件中的image,**切记不要把file-loader和url-loader同时使用**,url-loader本来就是对file-loader的更高级的封装 所以全有的功能 可以在url-loader上使用


## webpack-md5-hash的使用
我们知道webpack主要处理的是js 一般如果保持chunkhash一致的情况下 只要任意一个修改了 都会导致对应的css和js同时变更；哪怕是使用了extract-text-webpack-plugin,因为webpack是以整个js作为编译文件入口，只要你里面使用了诸如``require("xxx.css")``的操作 就一定会被webpack计算在内，同时更新，那这样就不利于缓存;所以我们可以采用css使用contenthash来处理，js使用webpack-md5-hash这样两个的修改就互不影响了