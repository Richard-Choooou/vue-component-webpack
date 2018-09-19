# webpack4.0-vue-components-config
基于webpack4.0的一套打包自定义vue组件的全自动脚手架配置



## 基本命令
|命令|说明|
|----|----|
|npm run dev|开发环境，可以边编写组件边预览|
|npm run build|生产环境，打包组件库文件|
|npm run new 英文名 中文名|用于新建组件 例如 npm run new test 测试|
|npm run remove 英文名|用于删除组件以及配置文件 例如 npm run remove test, 强烈建议使用此命令删除组件|


## 说明

1. 使用npm run new *** *** 创建组件
2. 会生成以下文件
    
    * [组件名].md       //用于组件示例以及文档编写

    * [组件名].js       //组件的入口文件，用于挂载到Vue

    * main.vue       //vue组件的源码

    * main.scss      //vue组件的sass样式

3. 会修改以下文件

    * nav.config.json // 开发环境下的路由配置

    * components.json // 组件的配置列表

4. 使用npm run remove *** 会删除以及修改以上文件

## 使用方式

```
import Vue from 'vue'
import *** from '***'         //组件入口文件或者组件打包后的文件或者npm包名 

Vue.use(***);
```

## 目录结构

```
|-- project
    |-- .DS_Store
    |-- .gitignore
    |-- README.md
    |-- package.json
    |-- yarn.lock
    |-- build
    |   |-- utils.js                        //自定义工具函数
    |   |-- webpack.base.js                 //webpack公共配置
    |   |-- webpack.demo.js                 //webpack开发环境配置（继承dev）
    |   |-- webpack.dev.js                  //webpack开发环境配置
    |   |-- webpack.pro.js                  //webpack生产环境配置
    |   |-- bin
    |   |   |-- build-entry.js              //通过命令生成lib入口文件
    |   |   |-- build-route.js              //通过命令生成开发环境路由配置
    |   |   |-- new-component.js            //通过命令创建组件
    |   |   |-- remove-component.js         //通过命令删除组件
    |   |-- config
    |       |-- index.js                    //一些配置，可以在此配置组件命名空间
    |-- dist
    |   |-- main.6a393d5510c26353ac73.css   //组件打包后的css
    |   |-- senguo.m.ui.js                  //组件打包后的js文件，不包含vue.js，可在webpack.pro.js中更改文件打包后的命名
    |-- examples
    |   |-- index.html                      //开发环境下index.html
    |   |-- index.js                        //开发环境下入口文件
    |   |-- src
    |       |-- app.vue                     //vue文件入口，类似vue cli
    |       |-- components                  //自定义的vue页面或者组件
    |       |   |-- header.vue
    |       |   |-- main.vue
    |       |   |-- nav.vue
    |       |-- doc                         //以下文件会通过命令生成，对应每一个组件的示例以及文档，可以在md文件中编写vue语法
    |       |   |-- alert.md                //此文件中有示例
    |       |   |-- dialog.md
    |       |   |-- table.md
    |       |-- router
    |           |-- nav.config.json         //此文件是开发环境下的路由配置，可以自行编写路由，创建组件和删除组件时，会自动更改里面的内容
    |           |-- router.config.js        //此文件是自动生成的
    |-- src
        |-- components.json                 //此文件是自动生成的组件配置列表
        |-- entry.js                        //此文件是自动生成的入口文件
        |-- packages                        //需要编写的组件文件，内容是自动生成的
        |   |-- alert
        |   |   |-- WechatIMG5.png
        |   |   |-- index.js
        |   |   |-- src
        |   |       |-- main.scss
        |   |       |-- main.vue
        |   |-- dialog
        |   |   |-- index.js
        |   |   |-- src
        |   |       |-- main.scss
        |   |       |-- main.vue
        |   |-- table
        |       |-- index.js
        |       |-- src
        |           |-- main.scss
        |           |-- main.vue
        |-- style                           //样式文件
            |-- common                      //公共样式文件，组件会自动引入
                |-- functions.scss
                |-- mixins.scss
                |-- variable.scss

```
