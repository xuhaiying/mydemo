### 协议分类  传输层协议
- TCP 
    - 传输控制协议
    - 可靠的、面向连接的协议
    - 传输效率低
- UDP
    - 用户数据报协议
    - 不可靠的、无连接的服务
    - 传输效率高
### TCP功能
- 将数据进行分段打包传输
- 对每个数据包编号控制顺序
- 运输中丢失、重发和丢失处理
- 流量控制避免阻塞
### UDP
- type必须输入，制定时udp4还是udp6
- callback 从该接口接收到数据时调用的回调函数
    - msg 接收到的数据
    - rinfo 信息对象
        - address 发送者的地址
        - family ipv4还是ipv6
        - port 发送者的socket端口号
        - size 发送者所发送的数据字节数
        