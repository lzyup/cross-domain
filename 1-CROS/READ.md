### 项目运行
- `node serverReq.js`
- `node serverRes.js`

### 原理
- 请求没啥区别，关键在服务端收到请求
- 服务器需要在响应头中的`Access-Control-Allow-Origin`，该值需要跟请求头中Origin一致才能生效，否则跨域将失败