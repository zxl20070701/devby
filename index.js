const { deleteSync, copySync, moveSync } = require('./src/file');
const { log, warn, error, linelog } = require('./src/log');
const process = require('./src/process');
const options = require('./src/options');
const { get, post } = require('./src/remote');
const network = require('./src/network');

module.exports = {

    // 命令行相关
    options,

    // 文件操作相关
    deleteSync, copySync, moveSync,

    // 日志打印
    log, warn, error, linelog,

    // 进度打印
    process,

    // 请求
    get, post,

    // 查看网络信息
    network

};