<div align="center">
  <h1>web-cli</h1>
  <p>前端脚手架工具开发学习---前端工程化的发起者</p>
  <a href="https://github.com/onlyLucky/web-cli">
    <img src="https://s4.ax1x.com/2022/02/28/bu6BJx.png" alt="node">
  </a>
  <a href="https://github.com/onlyLucky/web-cli">
    <img src="https://s4.ax1x.com/2022/02/28/bu6yQO.png" alt="npm">
  </a>
  <a href="https://github.com/onlyLucky/web-cli">
    <img src="https://s4.ax1x.com/2022/02/28/bu6sSK.png" alt="build">
  </a>
  <a href="https://github.com/onlyLucky/web-cli">
    <img src="https://s4.ax1x.com/2022/02/28/bu6DW6.png" alt="license">
  </a>
</div>

## 目录

1. [简介](#简介)


## 简介

脚手架的本质作用---- 创建项目基础结构、提供项目规范和约定

**最主要的特征**

- 相同的组织结构
- 相同的开发范式
- 相同的工具配置
- 相同的基础代码
- 相同的模块依赖

比如，IDE创建项目的过程就是一个脚手架的工作流程（Android Studio）

---
**其中我们能从这里学到什么呢？**

- 脚手架的作用
- 常用的脚手架工具
- 通用脚手架工具剖析
- 开发一款脚手架

### 常用的脚手架工具

- React.js项目 --> create-react-app
- Vue.js项目 --> vue-cli
- Angular项目 --> angular-cli
- Yeoman
- Plop


## Yeoman
The web's scaffolding tool for modern webapps


[![bxbFPI.png](https://s1.ax1x.com/2022/03/15/bxbFPI.png)](https://imgtu.com/i/bxbFPI)


## Yeoman基本使用

安装使用

- 全局范围安装yo

```shell
$ npm i -g yo /  yarn global add yo
```
- 安装对应的generator

```shell
$npm install generator-node --global # or yarn global add generator-node
```
- 通过yo运行generator
```shell
$ cd path/to/project-dir
$ mkdir my-module
$ yo node
```

下面使用脚本创建一个简单的demo
```shell
$ mkdir my-modlue
$ yo node
$ yo node:cli
```
详细代码参考[my-module](my-module)

### 下一步将该项目暴露到全局
```shell
$ yarn link
```
如果你看到以下内容，说明，项目暴露到全局成功

info You can now run `yarn link "***你的项目名"` in the projects where you want to use this package and it will be used instead.

### 测试全局能否查到项目
```shell
$ **你的项目名 --help  (my-module --help)
```
注意如果有下面的报错：

 -bash: /usr/local/bin/my-module: Permission denied ，看来是没有权限导致的

可以尝试如下方式


1. 到上一个目录，
```shell
$ cd ..
```
2. 将该项目授权
```shell
$ sudo chmod -R 777 项目名
```
3. 回到项目中

```shell
$ cd my-module
```
4. 再次查看
```shell
$ my-module --help
```
在这里就可以看到控制台打印了下面这些东西
```shell
Usage
    $ my-module [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ my-module
    unicorns
    $ my-module rainbows
    unicorns & rainbows
```

## Yeoman Sub Generator

**相关参考**

