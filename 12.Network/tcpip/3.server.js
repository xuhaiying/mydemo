//当客户端访问服务器的时候，服务器会发送给客户端一个文件
let net = require('net');
let path = require('path');
let rs = require('fs').createReadStream(Path2D.join(__dirname,'msg.txt'));
var server = net.createServer(function (socket){
    rs.on('data',function (data){
        let flag = socket.write(data);//可写流缓存是否满了
        console.log(flag);
        console.log('缓存的字节数='+socket.bufferSize);
    })
    socket.on('drain',function(){
        console.log('TCP缓存区的数据已经发送')
    })
});

server.listen(8080,function (){
    console.log('服务器已经启用')
})