let zlib = require('zlib');
let str = 'hello';
zlib.gzip(str,(err,buffer) => {
    console.log(buffer);
    zlib.unzip(buffer,(err,data) => {
        console.log(data.toString);
    })
});
