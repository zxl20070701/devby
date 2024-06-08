# [devby](https://github.com/zxl20070701/devby)
开发辅助库，提供常用的命令和实用模块并帮助你快速开发NodeJS脚手架cli产品

<p>
    <a href="https://zxl20070701.github.io/toolbox/#/npm-download?packages=devby&interval=7">
        <img src="https://img.shields.io/npm/dm/devby.svg" alt="downloads">
    </a>
    <a href="https://www.npmjs.com/package/devby">
        <img src="https://img.shields.io/npm/v/devby.svg" alt="npm">
    </a>
    <a href="https://github.com/zxl20070701/devby" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/zxl20070701/devby?style=social">
    </a>
</p>

<img src="https://nodei.co/npm/devby.png?downloads=true&amp;downloadRank=true&amp;stars=true" alt="NPM">

### 使用方式

你可以作为一个命令行使用，那么你需要全局安装：

```shell
npm install -g devby
```

也可以作为项目开发中的一个功能加强，在 package.json 中配置命令或nodejs文件中引入需要的模块使用，那么就在项目中执行安装命令：

```shell
npm install devby --save
```

全局安装后，就可以直接作为命令行使用了。你可以打印帮助查看：

```shell
devby -h
```

比如会出现下列内容：

```
Usage: devby <command>

    where <command> is one of:
        --help, -h, --server, -s, --version, -v, --config, -c, --delete, --copy, --copyfiles, --move, --network, --get, --post, --cat, --run
    
    devby --help|-h <term>       search for help on <term>
    devby --help|-h              involved overview
```

比如--server或-s命令如何查看具体使用说明？只需要：

```shell
devby -h s
```

然后看见打印提示：

```
devby --server|-s [port|20000]         [2]render source server.
```

根据提示我们知道，这是一个快速启动一个本地资源服务器的命令，使用的时候可以设置服务器端口号，端口号缺省是20000。

比如我们启动端口为8080的服务器：

```shell
devby -s 8080
```

对于更复杂的业务，我们推荐使用配置文件的方式。比如我们准备了配置文件 devby.config.js ，那么就可以：

```shell
devby -c ./devby.config.js
```

配置文件的内容如下：

```js
module.exports = {
    devServer: {
        // 可配置参数和“服务器”一致
    }
};
```

如果你需要在项目中更灵活的使用，我们也提供了一些有用的API，具体如下：

- [服务器](./docs/server.md)
- [命令行参数解析](./docs/options.md)
- [文件相关操作](./docs/file.md)
- [控制台打印](./docs/console.md)
- [网络请求（ajax）](./docs/ajax.md)
- [网络信息等](./docs/network.md)
- [资源数据](./docs/data.md)
- [图片相关操作](./docs/image.md)
- [文件解析Loader](./docs/loader.md)

此外，针对更具体的业务场景，我们也提供了更高效的产品：

> 暂无，开发中！

## 版权

MIT License

Copyright (c) [zxl20070701](https://zxl20070701.github.io/notebook/home.html) 走一步，再走一步