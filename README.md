# [devby](https://github.com/fragement-contrib/devby)
开发辅助

## 如何使用？

本项目用于提供更便捷的开发体验，功能会根据实际情况逐步调整。

```
npm install -g devby
```

然后，直接启动即可开启一个本地HTTP服务器：

```
devby
```

更多功能你可以打印帮助查看：

```
devby -h
```

特别说明，如果你基于配置文件``` devby.config.js ```使用，配置文件格式如下：

```js
module.exports = {
    devServer: { // 服务器
        port: 8080, // 端口号
        proxy: [{ // 配置转发，可以任意多个
            test: /^\/example/, // 匹配规则
            target: "http://www.example.com" // 转发地址
        }]
    }
};
```

更多细节你可以[点击此处](https://fragement-contrib.github.io/devby)查看文档！

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步