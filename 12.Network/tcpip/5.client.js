let net = require('net');
let socket = new net.Socket();
socket.connect(8080,'localhost',function (){
    console.log('客户端连接成功');
    socket.write('hello');
});
socket.setEncoding('utf8');
socket.on('data',function(data){
    console.log(data)
})
setTimeout(function (){
    socket.end();
},5000);