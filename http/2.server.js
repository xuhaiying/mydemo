let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');
let mime = require('mime');// 可以通过一个文件的名称或者路径，拿到文件的类型，这个包是第三方的，需要npm
// 把一个异步方法转成一个返回promise的方法
let { promisify } = require('util');
let zlib = require('zlib');

let stat = promisify(fs.stat);
/**
 * 客户端向服务器发起请求的时候，会通过Accept-Encoding 告诉服务器支持的解压缩的格式
 */
http.createServer(request).listen(8080);

async function request (req,res){
    let { pathname } = url.parse(req.url); // /msg.txt
    console.log(pathname);
    let filepath = path.join(__dirname,pathname);
    try{
        // await 只能在async function里
        await stat(filepath);
        // 可以根据不同的文件内容返回不同的Content-Type
        res.setHeader('Content-Type',mime.getType(pathname));
        // 为了兼容不同的浏览器，node把所有的请求头全转成了小写
        let acceptEncoding = req.headers['accept-encoding'];
        if (acceptEncoding){
            if (acceptEncoding.match(/\bgzip\b/)){ // \b匹配边界
                res.setHeader('Content-Encoding','gzip');
                fs.createReadStream(filepath).pipe(zlib.createGzip()).pipe(res);
            } else if (acceptEncoding.match(/\bdeflate\b/)){
                res.setHeader('Content-Encoding','deflate');
                fs.createReadStream(filepath).pipe(zlib.createDeflate()).pipe(res);
            } else {
                fs.createReadStream(filepath).pipe(res);
            }
        } else {
            fs.createReadStream(filepath).pipe(res);
        }
    } catch(e){
        res.statusCode = 404;
        res.end();
    }
}