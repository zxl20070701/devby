const linelog = require('./log').linelog;

/**
 * 进度打印
 * 
 * @param {number} percentum 进度0-100 
 * @param {string} stream 说明文字,可选择
 */
module.exports = function (percentum, stream) {

    if (arguments.length <= 1) stream = "";

    let txt = "",
        i = 0;

    // 补充已经有的进度
    for (; i <= percentum && i <= 100; i += 5) {
        txt += "█";
    }

    // 补充余下的空白
    for (; i <= 100; i += 5) {
        txt += "░";
    }

    linelog(percentum.toFixed(2) + "%[" + txt + "]" + stream);

};