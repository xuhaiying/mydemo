//如何创建一个httpfwq
//http服务器是继承自tcp服务器 http协议是应用层协议，是基于TCP的
//对请求和响应进行了包装
let http = require('http');
//req 流对象 是可读流
//res 是一个可写流 write
let url = require('url');
let server = http.createServer();
//req代表客户端的连接，server服务器把客户端的请求信息进行解析，然后放在req上面
//res代表响应，如果希望向客户端回应消息，需要通过res
server.on('connection', function (socket) {

})
server.on('request', function (req, res) {
    console.log(req.method); //获取请求方法名
    console.log(req.url); //获取请求路径
    console.log(req.headers); //请求头对象
    let { pathname,query } = url.parse(req.url,true);
    let result = [];
    req.on('data', function (data) {
        result.push(data);
    })
    req.on('end', function () {
        let r = Buffer.concat(result); //请求体
        res.end(r);
    })
});
server.listen(8080, function () {
    console.log('server started at http://localhost:8080');

});