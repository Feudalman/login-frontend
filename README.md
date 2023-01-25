# React登录系统前端

[博客](https://blog.csdn.net/qq_51574759/article/details/128761141?spm=1001.2014.3001.5502)

## 目录结构

```
src					=》	src是最重要的一个目录!所以略去其他目录，重点介绍这个
    │  index.css	=》	全局样式
    │  index.js		=》	项目入口*
    │  
    ├─components	=》	公用组件库
    ├─http			=》	对axios请求库的封装*
    │      apis.js	=》	api接口
    │      http.js	=》	对请求对象封装
    │      service.js	=》	对axios封装*
    │      
    ├─layout		=》	布局文件（因为项目简单，故没有用到）
    ├─router		=》	项目路由*
    │      index.js
    │      
    ├─static		=》	静态资源
    │  └─imgs
    │          indexBackground.jpg
    │          
    ├─store			=》	存储库，用来封装`redux`等状态管理库（项目简单，未使用）
    ├─utils			=》	公用工具，封装一些使用频率高的模块、函数（未使用）
    └─views			=》	页面目录，所有页面均位于此***
        │  App.jsx	=》	页面入口
        │  
        ├─Index		=>	首页
        │  │  index.jsx		=》	首页
        │  │  index.scss	=》	样式
        │  │  
        │  └─components		=》	首页专用组件
        └─Login
            │  index.jsx	=》	登录页
            │  index.scss	=》	登录页样式
            │  
            └─components	=》	登录页专用组件
                │  Block.scss	=》	公用样式
                │  
                ├─LoginBlock	
                │      LoginBlock.jsx	=》	登录组件
                │      
                └─RegisterBlock
                        RegisterBlock.jsx	=》	注册组件
```


## 技术选择—版本

| 使用技术 |               技术介绍               | 版本号 |                           文档地址                           |
| :------: | :----------------------------------: | :----: | :----------------------------------------------------------: |
|  组件库  |  蚂蚁集团开发的组件库：antd design   | 5.1.1  |  [Antd Design](https://ant.design/components/overview-cn/)   |
|  请求库  | 很优秀的前端请求库，进行了很好的封装 | 1.2.2  |    [Axios中文文档](https://www.axios-http.cn/docs/intro)     |
| CSS框架  |  优秀CSS框架：Sass（和less同类型）   | 1.57.1 |              [Sass官网](https://sass-lang.com/)              |
|   路由   |  使用官方的路由库：react-router-dom  | 6.6.1  | [React Router中文网](https://react-guide.github.io/react-router-cn/) |