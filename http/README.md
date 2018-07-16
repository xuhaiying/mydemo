### http和TCP
- http是应用层协议
- TCP是传输层协议
- http在TCP的基础上进行了封装
- http是一种不保存状态的协议

### 长链接

### 管线化

### URI和URL
- URI是统一资源标识符，在某个规则下能把这个资源独一无二标识出来
    - Uniform 不用根据上下文来识别资源指定的访问方式
    - Resource 可以标识的任何东西
    - Identifler 表示可标识的对象
- URL统一资源定位符，表示资源的地点，URL时使用浏览器访问WEB页面时需要输入的网页地址
    - Uniform 不用根据上下文来识别资源指定的访问方式
    - Resource 可以标识的任何东西
    - Location 定位
- URL是URI的子集 URI的子集还包括URN

### URL的格式
```
http://user:pass@www.daoway.con:80/dian/index.html?uid=1#chj
```
- 协议类型 http
- 登录信息 user:pass@
- 服务器地址 www.daoway.con
- 端口号 80
- 带层次的文件路径 /dian/index.htm
- 查询字符串 uid=1
- 片段标识符 chj

### http请求报文

- 请求行 
    - 方法
        - GET 获取资源 （没有请求体）
        - POST 向服务器端发送数据，传输实体主体
        - PUT 传输文件
        - HEAD 获取报文首部
        - DELETE 删除文件
        - OPTIONS 询问支持的方法
        - TRACE 追踪路径
    - URI /form/entry
    - 协议版本 HTTP/1.1
- 请求头
- 请求体