// resume pause
let net = require('net');
let path = require('path');
let ws = require('fs').createWriteStream(path.join(__dirname,'msg.txt'));
//socket代表跟客户端的连接
let server = net.createServer({});
server.on('connection',function (socket){
    socket.pause();
    //设置客户端的超时时间，如果客户端一直不输入超过一定的时间就认为超时了
    socket.setTimeout(3 * 1000);
    socket.on('timeout',function (){
        //默认情况下，当可读流读到末尾的时候会关闭可写流
        //如果加入{end: false}则不会关闭可写流
        console.log('timeout');
        socket.pipe(ws,{end: false});
    });
});
server.listen(8080,function (){
    console.log('服务器端已经启动');
})