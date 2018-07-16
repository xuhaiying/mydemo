// define 声明模块 通过require使用一个模块
let factories = {}
function define(moduleName,dependecies,factory){
    factory.dependecies = dependecies;//将依赖记到factory上
    factories[moduleName] = factory;
}
function require(mods,callback){
    let result = mods.map(function (mod){
        let factory = factories[mod];
        let dependecies = factory.dependecies;
        let exports;
        require(dependecies,function(){
            exports = factory.apply(null,arguments);
        })
        return exports;
    })
    callback.apply(null,result);
}
define('name',[],function (){
    return 'xu'
});
define('age',['name'],function (name){
    return name + '保密'
})
require(['age'],function(age){
    console.log(age);
})