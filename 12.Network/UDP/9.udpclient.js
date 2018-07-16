let dgram = require('dgram');

let sockent = dgram.createSocket('udp4');
//向对方发送消息
let buf = Buffer.from('你好');
sockent.send(buf,41234,'localhsot',function (){

});
sockent.on('message',function (msg,rinfo){
    console.log(msg.toString());
})