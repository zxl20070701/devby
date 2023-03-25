const http = require('http');
const fs = require('fs');

const mineTypes = require('./mime.types.js');
const { log, error } = require('./log');
const responseFileList = require('./responseFileList');
const path = require('path');

const jsonfile = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));

module.exports = function (port) {
    port = port || 20000; // 端口号
    let basePath = process.cwd(); // 服务器根路径

    let index = 0;
    let server = http.createServer(function (request, response) {
        try {
            let url = decodeURIComponent(request.url);

            log("[" + index++ + "]" + url);

            url = url.split("?")[0];

            // 请求的文件路径
            let filePath = path.join(basePath, url == "/" ? "index.html" : url.replace(/^\//, ""));

            let dotName = /\./.test(filePath) ? filePath.match(/\.([^.]+)$/)[1] : "";

            // 文件类型
            type = mineTypes[dotName];

            if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
                response.writeHead(200, {
                    'Content-type': (type || "text/html") + ";charset=utf-8",
                    'Server': "Powered by devby@" + jsonfile.version
                });
                response.write(fs.readFileSync(filePath));
            } else {
                response.writeHead(404, {
                    'Content-type': "text/html;charset=utf-8",
                    'Server': "Powered by devby@" + jsonfile.version
                });
                response.write(responseFileList(filePath));
            }
        } catch (e) {
            error(e);

            response.writeHead(500, {
                'Content-type': "text/plain;charset=utf-8",
                'Server': "Powered by devby@" + jsonfile.version
            });
            response.write(e + "");
        }

        response.end();
    });

    server.listen(port);
    log('Server running on port:' + port);
};