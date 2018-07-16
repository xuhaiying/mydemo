let http = require('http');
//如何向客户端写入响应信息
/*
< HTTP/1.1 200 OK
< Date: Fri, 13 Jul 2018 07:20:42 GMT
< Connection: keep-alive
< Content-Length: 14
<
{ [14 bytes data]

 */
let server = http.createServer(function (req, res){
//     res.statusCode = 200;//设置响应码
//   //  res.sendDate = false; //Date响应头默认设置，如果真的不想要，可以设置为false
//     res.setHeader('Content-Type','text/html;charset=utf8');//设置响应头
//     console.log(res.getHeader('Content-Type'));//获取响应头
//     //res.removeHeader('Content-Type');//删除响应头
//     res.write('hello');
//     res.write('world');
//     res.end();
    //在同一个方法里设置状态码，原因短语，响应头
    //writeHead一旦调用会立刻向客户端发送，setHeader不会立刻向客户端发送，res.write时才会发送
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"})
});
server.listen(8080);