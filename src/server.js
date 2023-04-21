const http = require('http');
const fs = require('fs');

const mineTypes = require('./mime.types.js');
const { log, warn, error } = require('./log');
const responseFileList = require('./responseFileList');
const path = require('path');

const jsonfile = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));

module.exports = function (config = {}) {

    port = config.port || 20000; // 端口号
    proxy = config.proxy || [];

    let basePath = process.cwd(); // 服务器根路径

    let index = 0;
    let Server = http.createServer(function (request, response) {
        try {
            let requestData = "";

            request.on('data', (chunk) => {
                requestData += chunk;
            });

            request.on('end', () => {
                let url = decodeURIComponent(request.url);

                log("[" + index++ + "]" + url);

                // proxy拦截
                for (let item of proxy) {
                    if (item.test.test(url)) {
                        let _path = item.target.path + (url.replace(item.test, ""));

                        warn("    ↳ [" + request.method + "] " + item.target.protocol + "://" + item.target.hostname + ":" + item.target.port + _path);

                        // https://www.nodeapp.cn/http.html#http_http_request_options_callback
                        const req = http.request({
                            hostname: item.target.hostname,
                            port: item.target.port,
                            path: _path,
                            method: request.method,
                            headers: request.headers
                        }, (res) => {
                            res.setEncoding('utf8');

                            let responseData = "";
                            res.on('data', (chunk) => {
                                responseData += chunk;
                            });
                            res.on('end', () => {
                                let responseHeaders = res.headers;
                                responseHeaders['proxy-server'] = "Powered by devby@" + jsonfile.version;
                                response.writeHead(res.statusCode, responseHeaders);
                                response.write(responseData);
                                response.end();
                            });
                        });

                        req.on('error', (e) => {
                            error(`      转发的时候遇到问题: ${e.message}`);
                            response.writeHead('500', {
                                'Content-type': "text/plain;charset=utf-8",
                                "proxy-server": "Powered by devby@" + jsonfile.version
                            });
                            response.write(e + "");
                            response.end();
                        });

                        req.write(requestData);
                        req.end();

                        return;
                    }
                }

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

                response.end();
            });
        } catch (e) {
            error(e);

            response.writeHead(500, {
                'Content-type': "text/plain;charset=utf-8",
                'Server': "Powered by devby@" + jsonfile.version
            });
            response.write(e + "");

            response.end();
        }

    });

    Server.listen(port);
    log('server running on port:' + port);
};