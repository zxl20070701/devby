module.exports = {
    devServer: {
        port: 9090,
        proxy: [{
            test: /^\/example/,
            target: "http://127.0.0.1:8080"
        }],
        handler: function (request, response) {
            // console.log(this, request, response);
        }
    }
};