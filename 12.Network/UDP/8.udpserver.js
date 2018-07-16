let dgram = require('dgram');

let socket = dgram.createSocket('udp4');
//发消息
//收消息
/**
 * param post,address
 */
socket.bind(41234,'localhost');
//监听对方发送过来的消息 rinfo= remoteInfo
socket.on('message',function (msg,rinfo){
    console.log(msg.toString());
    socket.send(Buffer.from(msg),rinfo.port,rinfo.address);
})