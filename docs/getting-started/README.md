# getting-started

该项目主要是对原有教务系统进行封装，并开放出RESTAPI；通过这种方式能够方便后续Web端，小程序等等的设计和统一



## 如何起步

* 获取项目代码库

  ```git
  git clone git@github.com:jianjustin/cduestc-api.git
  ```

* 安装依赖并启动应用

  ```
  npm install
  npm run start
  ```

* 阅读API文档，并在浏览器或postman进行API测试

测试服务器：[http://35.229.130.215:3000](http://35.229.130.215:3000/)



## 项目技术栈

* Node.js   — 用于应用服务器
* axios ——— 模拟HTTP请求
* jsdom ——  解析源数据



## 后续任务

1. 将session进行封装，并开放出oAuth API
2. 目前教务系统不稳定，所以需要引入请求重发机制
3. 文档维护



-------------------------

欢迎大家加入其中，在项目中学习和交流`janine.jian.chen@gmail.com`