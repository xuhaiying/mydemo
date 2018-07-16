## 模块化
模块化是指把一个复杂的系统分解到多个模块以方便编码。

### 命名空间
库名.类别名.方法名

### CommonJS
- JavaScript 模块化规范
- 一个文件为一个模块
- 通过module.exports暴露模块接口
- 通过require引入模块
- 同步执行
- Node.js环境下运行

### AMD
- 异步
- define 定义模块
- require 加载模块
- 依赖前置，提前执行

AMD JavaScript 模块化规范，与CommonJS最大的不同在于它采用异步的方式去加载依赖的模块。AMD规范主要是为了解决针对浏览器环境的模块化问题，最具代表性的实现是requirejs。

AMD 的优点
- 可在不转换代码的情况下直接在浏览器中运行
- 可加载多个依赖
- 代码可运行在浏览器和Node.js环境下

AMD 的缺点

### CMD 
- define 定义模块
- require 加载模块
CMD 与 AMD 最大的不同在于它尽可能懒执行  实现SeaJS
```
define(function (require,exports,module){
    // 通过require 引入依赖
    var $ = require('jquery');
    // 通过exports或者module.exports 对外提供接口
    exports.something = ...
    or
    module.exports = ...
}
```

### UMD
通用解决方案
三个步骤
- 判断是否支持AMD
- 判断是否支持CommonJS
- 如果都没有，使用全局变量
```
(function (root,factory){
    if (typeof defind === 'function' && defind.amd){
    // AMD
        define([],factory);
    } else if (typeof exports === 'object'){
    // CommonJS
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(this,function (){
    return {};
}))
```