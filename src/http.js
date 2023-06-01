const http = require('http')
// 1.开启服务
// 2.根据不同网址显示不同页面
// 3.写post get接口

const url = require('url')

const server = http.createServer();
server.on('request',(req,res)=>{
    const urlobj =
    console.log(req.url);
    res.end('hi')
})
server.listen(3000);