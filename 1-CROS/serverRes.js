var express = require('express');
var app = express();
var requestPort = 3000; //响应请求的页面跑在3000端口

app.use(express.static(__dirname + '/static'));//3000端口的静态文件，即index.html

//__dirname始终指向当前js代码文件(serverReq)所在的目录，在我的本地目录/Users/xiaganfu/WebstormProjects/crossDomain-demo
app.listen(requestPort, function () {
    console.log("Request is listening on port" + requestPort)

})