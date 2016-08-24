# webpack-demo

相比于gulp，

- 1、webpack在构建具备版本管理能力的项目方面，更优秀一些，天生自带的chunkhash 是其优势
- 2、结合万物皆模块的思想，在资源打包这块做的更彻底和完美
- 3、webpack的模块化 可以使我们很方便的使用commonJS规范来组织代码 写代码更带感




``module.loaders`` : 最重要的一环节，模块加载器，以数组形式支持，告知webpack每种文件用什么加载器来处理 

常用的加载器有：
1、处理css常用的style-loader和css-loader
2、处理图片转base64的有url-loader,目前测试支持转通过脚本写入或者是require css里的内容

> PS: 常常将loader和plugin的概念混淆，这里做下区分，其实本身webpack只处理javascrpit也就跟我们平时见到的诸多加载器并无二样，但是强大的地方就在于其万物皆模块的思想；要想将其他资源整合成模块处理，就需要一套转换机制，而正好loader就是帮我们处理这个东西；

``plugin`` : 插件在处理工作流上会更优秀一些，与loader相辅相成,完成 loader 不能完成的任务。


通过webpack.dev.config.js来搭建webpack的开发环境 去除编译环节 减少编译负担 增加开发效率

使用file-loader来处理文件中的image