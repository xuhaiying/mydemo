let express = require('express');
let app = express();
let whitList = ['http://localhost:3000']
app.use(function (req,res,next){
    let origin = req.header.origin;
    if (whitList.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin);
        res.setHeader('Access-Control-Allow-Header','name');
        res.setHeader('Access-Control-Allow-Methods','PUT')
    }
    next();
})
app.get('/getData',function(req,res){
    res.end('world');
})
app.use(express.static(__dirname));

app.listen(4000);