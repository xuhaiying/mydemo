let net = require('net');
// 创建一个服务器
// 广播 b:内容 此客户端想要向所有的其他客户端广播
// 私聊 c:对方的用户名：内容 想向指定的用户名发消息
// 列出在线用户列表 l 表示列出所有的在线用户信息列表
// 修改昵称 n:新名字 表示此客户端想修改自己的名称
let clients = {};
let server = net.createServer(function (socket) {
    let key = socket.remoteAddress + socket.remotePort;
    socket.write(`欢迎光临`+'\r\n');
    clients[key] = {
        nickname: 'xhy',
        socket
    };
    socket.setEncoding('utf8');
    socket.on('data', function (data) {
        data = data.replace(/\r\n/,'');
        console.log(data);
        let type = data.slice(0, 1);
        switch (type) {
            case 'b':
                let text = data.slice(2);
                boardcast(text);
                break;
            case 'c':
                let values = data.split(':');
                let toUser = values[1];
                let toText = values[2];
                sendTo(toUser,toText);
                break;
            case 'l':
                list();
                break;
            case 'n':
                let newName = data.slice(2);
                let oldUserObj = clients[key];
                oldUserObj.nickname = newName;
                socket.write(`你的用户名已经修改为${newName}`);
                break;
            default:
                socket.write('此命令不能识别，请重新输入')
        }
    });
    socket.on('end',function (){
        socket.destroy();
        delete clients[key];
    })
    function boardcast(text) {
        let {nickname} = clients[key];
        for (let user in clients) {
            if (clients.hasOwnProperty(user) && user != key) {
                clients[user].socket.write(`${nickname}:${text}`);
            }
        }
    }
    function sendTo(toUser,text){
        let toUserObj;
        for (let user in clients){
            if (clients[user].nickname == toUser) {
                if (toUserObj.nickname == toUser){
                    break;
                }
            }
        }
        if (toUserObj){
            let {nickname} = clients[key];
            toUserObj.socket.write(`${nickname}:${text}`)
        } else {
            socket.write('用户名不正确或者对方已经下线！')
        }
    }
    function list() {
        let result = "在线用户列表\r\n";
        for (let user in clients){
            result += clients[user].nickname + '\r\n';
        }
        socket.write(result);
    }
});
server.listen(8080);