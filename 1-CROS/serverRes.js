var express = require('express');
var app = express();
var responsePort = 3001; //响应请求的页面跑在3001端口

//可以改变'/'为其他路径，改完之后serverReq.js里面的请求路径也需要改变
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');//设置允许跨域的origin,允许3000端口访问本地端口(3001)
    res.send('Hello world from CROS. ')
});
app.listen(responsePort, function () {
    console.log('cros_responser is listening on port' + responsePort)

})