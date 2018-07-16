var fs = require('fs');
function req (moduleName){
    // content代表文件的内容
    let content = fs.readFileSync(moduleName,'utf8');
    let fn = new Function('exports','module','require','__dirname','__fileName',content + '\n return module.exports');
    let module = {
        exports: {}
    }
    return fn(module.exports,module,req,__dirname,__filename);
}
let str = req('./commonJs/a.js');
console.log(str);
/*
  function (){
      module.exports = '我的commonJS';
      return module.exports;
  }
*/