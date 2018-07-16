# 加密算法

### crypto
```
crypto是node.js中实现加密和解密的模块 
在node.js中，使用OpenSSL类库作为内部实现加密解密的手段
```
### 散列（哈希）算法
```
散列算法也叫哈希算法，用来把任意长度的输入变换成固定长度的输出，常见的有md5，sha1等
```
- 相同的输入会产生相同的输出
- 不同的输入会产生不同的输出
- 任意的输入长度输出长度是相同的
- 不能从输出推算出输入的值

### HMAC算法
```
HMAC算法将散列算法与一个秘钥结合在一起，以阻止对签名完整性的破坏
```

### 对称加密
```
blowflsh 算法是一种对称的加密算法，对称的意思就是加密和解密使用的是同一个密钥。
```