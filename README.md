# 菜谱大全  

### 介绍  

本项目请求接口为万维易源网，UI使用ant design，使用方式请自行搜索API文档

&nbsp;
实现功能：  

+ 显示菜谱分类
+ 显示、搜索菜谱列表
+ 展示菜谱详情页

&nbsp;

### 环境搭建

#### 申请接口

请求接口为万维易源网的菜谱大全API，链接如下

`https://www.showapi.com/api/view/1164`

由于每天的请求次数受到一定限制，如果要使用本项目请自行申请接口

&nbsp;

#### 此处为申请接口的方法，已经知道的可以跳过

方法就是进入上面的链接， 点击申请使用（要先注册）

免费用户可以申请 `试用套餐 ` 和 `普通会员` ，都是针对当前的接口来说的

`试用套餐 ` 只有100次调用机会

`普通会员` 每天有100次调用机会，但是一个普通会员只能拥有一个这样的接口， 总之看各位的需求吧

申请完后点击右上角用户名跳转至后台管理

选择 `我是接口使用者 > 我的应用 > 添加 ` ，app名字随便起，可调用接口 选择 菜谱大全

创建好后可以看到应用的 `appId` 和 `密钥` ，这是接下来要用到的数据

&nbsp;

#### 修改项目参数

将项目克隆至本地后，将 `src/util/menu.js` 文件中的 `showapi_appid` 和 `showapi_sign`参数

改为上一小节中讲到的 `appId` 和 `密钥` 的值

&nbsp;

#### 启动项目

`npm install` 安装所有模块
`npm start` 开发环境下启动项目

建议在谷歌浏览器中运行，

虽然项目是自适应的，但还是更建议选择 iphone 6/ 7/ 8 的调试模式，展示效果会更好

&nbsp;

### 项目展示

![选择分类](https://github.com/crow-n/million-menus/raw/master/overlook/category.gif)

&nbsp;
&nbsp;

![搜索](https://github.com/crow-n/million-menus/raw/master/overlook/search.gif)

&nbsp;
&nbsp;

![搜索失败](https://github.com/crow-n/million-menus/raw/master/overlook/searchError.gif)

&nbsp;
&nbsp;

![详情页](https://github.com/crow-n/million-menus/raw/master/overlook/detail.gif)

&nbsp;

### 最后

感谢各位能看到最后，如果觉得本项目做的还不错的，麻烦给个小星星支持一下，有什么问题也可以提出来探讨哦~
