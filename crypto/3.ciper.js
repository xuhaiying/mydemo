let crypto = require('crypto');
let str = 'crypto';
let pk = '12343';
// 加密

let cipher = crypto.createCipher('blowfish',pk);
cipher.update(str,'utf8');
let result = cipher.final('hex')//输出加密的结果
console.log(result);

// 解密
let decipher = crypto.createDecipher('blowfish',pk);
decipher.update(result,'hex');
let r = decipher.final('utf8');
console.log(r);