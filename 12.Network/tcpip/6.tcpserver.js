//写一个聊天室 可以设置昵称 可以广播
const net = require('net');
let server = net.createServer(function (socket){
    let username;
    socket.on('data',function (data){

    });
    socket.on('end',function(){

    });
})
server.listen(8080);