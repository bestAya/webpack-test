# webpack
## 安装
```js
npm install --save dev webpack
```

## 含义
## 作用
1. 入口
2. 输出
3. loder(对模块进行处理)
4. 插件(对webpack的)
## 使用
- 必须有一个入口文件。
## import用法
- import aa from './src/js/1.js;
- 在1.js返回值应该用 export default a;
- 在import引用的时候如果不接受默认值则必须如返回的值的名字对应（import {aa} from './'）
- 返回多个值的情况 export {aa,bb,cc}
## start命令
- 配置start全局命令
- 在webpack.config.js->
```js
script:{    _start___webpack --watch_    }
```
## 插件 ##
```js
//第一步 配置npm包
npm install --save-dev extract-text-webpack-plugin
//第二部 引入到webpack.config.js配置文件中
const ExtractTextPlugin 
= require("extract-text-webpack-plugin");
//第三部 实例化包
plugins: [
            {new ExtractTextPlugin("styles.css"),}
         ]
```
## loder ##
### 含义 ###
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
```js
//第一步：安装相应的npm包
npm install --save-dev css-loader
//第二步：应用资源在webpack.config.js中
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
//
```