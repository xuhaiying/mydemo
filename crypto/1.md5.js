/**
 * 1.可以用来检验要下载的文件是否被改动过
 * 2.对密码进行加密
 */
let crypto = require('crypto');
let str = "hello";
//console.log(crypto.getHashes);
//let md5 = crypto.createHash('md5'); //32位
let md5 = crypto.createHash('sha1'); //40位
md5.update(str);// 指定要加密的值
md5.update('world');// 再次添加要加密的值
console.log(md5.digest('hex'));//输出md5值，指定输出的格式 hex 十六进制