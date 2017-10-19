# lyj

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


myLog:
2017.06.13
1.start proceed.
2.resource.
3.configuration.
 3.1 配置开发环境     port: 8004 autoOpenBrowser: true .... dev (index.js (config))
4.about wrong  cmd  when npm install, you have to try again .
5.目录结构:
   5.1 README.md 介绍   
       build         配置文件,bulid.js webpack配置文件 检查版本文件
       config        配置生成目录  开发生成的目录     
       index.html    未编译的index.html 首页  
       node_modules  网上下载的库
       package.json  根据packgage.json 去下载依赖包  scripts文件对应了这个命令去加载某一个文件
       src           工作目录  
       static        静态文件
       test          前端测试文件目录
       babelrc       es6转译规则
       editorconfig  编辑风格的配置 
       gitignore     通过git提交时候无视的文件


TIPS:
1.路由可提出单文件写
2.theme文件.
3.style文件.
4.发现了个ui框架的缺点,不能直接在页面设置scoped ...如果要reset.css 肯定要重新写一个...组件封装好了的css,能在源码里改吗？ 已解决
5.icon 暂时引用的vuex 作者挂载的cdn的icon.后期考虑挂载自己cdn的图标

2017.07.10
1.配置路由单文件。
2.将模块化测试转移。

webpack+vue-loader+vux

###### Fri Sep 15 17:53:34 CST 2017  
review

###### Tue Sep 19 16:14:13 CST 2017 
分析webpack 2种启动方式
1.npm run dev
1.1.首先去加载build文件夹内dev-server.js文件.

1.2.执行检测版本方法,用于本地跑项目检测npm,node版本,提示出兼容性更新。

1.3.区分build 和 dev 环境的2套config方案.关于生产环境配置的gzip 还需要多加配置
1.4. 关于proxyTable,我的理解是前端在config里面配置一个中间键,相当于本地不再需要apache 去转发地址,通过前后端分离的方式来说.但是具体的配置=========暂空。这个也只是开发的时候用,上线了,不会存在中间件,因为不是通过node 服务器去启动,而是通过iis或者其他服务器。
///// NODE_ENV=development 通过在package.jon 里面指定环境设置 process.env.NODE_ENV
///如果是测试 获取的webpackConfig 是生产环境的
///之前使用 配置webpack 的devServer 的 hot,配置hmr,相当于js热刷新,css冷刷新.....什么解释...
///现在使用一个中间件:::: webpack-hot-middleware

[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

Webpack Hot Middleware
Webpack hot reloading using only webpack-dev-middleware. This allows you to add hot reloading into an existing server without webpack-dev-server.


///测试了一下,我以为更改了js 文件不用刷新页面。。。看来是妄想 w h m


///看了官方例子
If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application.
//但是不知道为什么
###### Tue Sep 19 17:48:10 CST 2017 要下班了 先写个页面bug

## HTML5 history API 
//说是防止用户刷新页面时候出现的问题,由于是发布一个html,==index.html,所以更改路由会变化。

//关于 css loader 的source map 我没有找到 npm run build 时候 生成的map,
//sourcemap 的 options 设置成true,则可以调试在哪个文件的css
//最后将之压缩。 
//DefinePlugin 在main.js 可以输出定义的,可以区分开发版本和发布版本
////但是 这个不是window下面的属性？？？。。。window.打不出来

//在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。

//HtmlWebpackPlugin 通过设置icon和title,title需要在index.html 动态写法

///使用第三方组件库的一个问题::
//1.如果别人更新了,我们怎么办?
//2.修改内部的源码,怎么保留原始和自身版本。



////考虑一个问题,如果每一次import都使用自己定义的库,可能会出现问题,由于路径的问题,
1.首先能不能再打包之后正确使用
2.方不方便去修改,如果更改了目录位置,文件内部的定位需要改变。



///如果别人更新了,可以通过updata本地的package 去对比更新的内容,更新。

//记录每一次源码的更改,不然以后会覆盖,造成本地的bug丢失无法解决。



////为什么要把第三方库(经常更新的)从module 里面提取出来,这样的话,如果我本地扩展了组件,被更新了就会马上被刷新了,所以很不利于组件化开发。



////所以关于vux的应该提取出来

///对于第三方的尽量还是不要通过改动源码
因为这样的话,就像上面所说的,更新了源库,你的代码就没法和modules里面的同步,这样的话造成手动的操作。

所以关于第三方的我们都引入,不使用相对路径或者绝对路径。
对于自己添加的模块,需要根据路径去引入。
通过import的方式,比较清楚明了。