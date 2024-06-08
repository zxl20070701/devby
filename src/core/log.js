// 日志
exports.log = function (txt) {
    console.log("\x1B[34m" + txt + "\x1B[39m");
};

// 警告
exports.warn = function (txt) {
    console.log("\x1B[33m" + txt + "\x1B[39m");
};

// 错误
exports.error = function (txt) {
    console.log("\x1B[35m" + txt + "\x1B[39m");
};


// 计算字符串长度的方法
const stringwidth = function (str) {
    return str.length;
};

// 预定义的常量
const MOVE_LEFT = Buffer.from('1b5b3130303044', 'hex').toString();
const MOVE_UP = Buffer.from('1b5b3141', 'hex').toString();
const CLEAR_LINE = Buffer.from('1b5b304b', 'hex').toString();

// 不换行打印
const linelog = (function (stream) {

    // 用来记录前置有多少行需要回退
    let prevLineCount = 0;

    // 返回实际同行打印的方法
    return function (nextStr) {
        let txt = "";

        // 清除屏幕
        for (let i = 0; i < prevLineCount; i++) {
            txt += MOVE_LEFT + CLEAR_LINE + (i < prevLineCount - 1 ? MOVE_UP : '');
        }

        // 写入屏幕
        stream.write(txt + nextStr);

        // 重新计算需要回滚多少行
        let prevLines = nextStr.split('\n');
        prevLineCount = 0;
        for (let i = 0; i < prevLines.length; i++) {
            // 因为有时候文字过多，因此拿总长度除以一行长度得出真实的行数
            prevLineCount += (Math.ceil(stringwidth(prevLines[i]) / stream.columns) || 1);
        }

    };
})(process.stdout);

exports.linelog = linelog;

/**
 * 进度打印
 * 
 * @param {number} percentum 进度0-100 
 * @param {string} stream 说明文字,可选择
 */
exports.deeplog = function (percentum, stream) {

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