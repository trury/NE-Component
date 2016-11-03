[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![building](https://g.hz.netease.com/loan-f2e/Loan-SY/badges/develop/build.svg)](https://g.hz.netease.com/loan-f2e/Loan-SY/pipelines)

# 技术选型
* [React](https://facebook.github.io/react/index.html)
* [React-router](https://github.com/reactjs/react-router#readme)
* [Redux](http://redux.js.org)
    - [redux-thunk](https://github.com/gaearon/redux-thunk)
    - [redux-logger](https://github.com/fcomb/redux-logger#readme)
* [React-redux](https://github.com/gaearon/react-redux)
* [React-router-redux](https://github.com/reactjs/react-router-redux#readme)

# 开发和构建
开发环境基于 express,webpack-dev-middleware 和 webpack-hot-middleware 搭建，项目基于 ES2015+ 编写，样式基于 scss(兼容：android >4.2, ios > 7.0 )

* [express](http://expressjs.com/)
* [webpack](https://github.com/webpack/webpack)

## 开发
### 前提
* Node > 6.0
* Npm > 3.0

### 安装依赖
```
npm install
```
### 开发
```
npm run dev
```
默认服务地址 localhost:3001
## 打包
```
npm run dist
```
打包后的文件会放在 dist 文件夹下，每次打包都会删除上一次打包的内容。
## 联调
连接后端开发的电脑进行联调，后端同学机子的 ip 地址在 env.js 里面配置。
```
npm run api
```
## 预览
预览打包后的，将要实际跑在生产环境上的代码。
```
npm run online
```
# 项目目录结构
```
- data                mock 数据
- dist                打包后用于生产环境的文件
    - css
    - font
    - image
    - index.html
    - other
- src
  - actions           
  - assets            
    - images
    - font
  - components        基础组件
    - button
      - button.js
      - button.scss
  - reducers          
  - routes            路由定义
  - scss              基础样式
  - ui_components     样式组件
  - utils             工具函数
  - vendors           第三方依赖文件
  - views             页面
    - home
      - components
      - home.js
      - home.scss
      - index.js
  - index.html        入口页模版
  - index.js          入口文件
- config.js           默认开发环境配置文件
- env.js              本地开发环境配置文件
- online.js           预览生产环境服务
- package.json        
- server.js           本地开发服务
- webpack.config.js   webpack配置文件
```

# 组件

## 列表
* [x] Form          提供表单校验，填写完成校验（决定提交按钮是否高亮）
    - [x] FromCell  表单 Cell，用以嵌套实际的表单内容（select,input,checkbox）
    - [x] Select    选择器
    - [x] Input     基础输入组件
    - [x] CheckBox
* [x] Button
* [x] verifyButton  验证码
* [x] Cells         Cell 集合
    - [x] Cell      
        * [x] CellHD    Cell 标题
        * [x] CellBD    Cell 主体内容
        * [x] CellFT    Cell 修饰
* [x] Panel         通用展示面板
    - [x] PanelItem
        - [x] PanelContent
* [x] Link
* [x] Icon
* [ ] Upload        上传图片
* [x] Toast         
* [x] Alert         
* [ ] DatePicker    日历

## 规范
原则上组件没有自己的 state, 所有的属性都父级通过 props 传下来。
但是针对一些特别的，不适合在 store 里面管理的属性，可以在组件内部通过 state 管理。比如发送验证码组件内部，应该管理自己的剩余秒数 state，没有必要在 store 里面管理。
对于需要自己管理 state 的组件，必须保证逻辑正确性，即同样的输入必须有同样的输出。

# 应用 Store 结构
初步定义为以下的结构
```
Store
 - Public 通用数据
 - Api
    - isFetching
    - success
 - Toast 
    - content 内容
    - show    是否显示
 // 具体页面
 - home 首页（对应具体页面的名字）
 - applyListItem 四项基本资料认证
 - Router 路由数据
```
