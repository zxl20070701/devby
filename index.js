const { deleteSync } = require('./src/file');
const { log, warn, error } = require('./src/log');

module.exports = {

    // 文件操作相关
    deleteSync,

    // 日志打印
    log, warn, error

};