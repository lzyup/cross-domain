[### ](https://note.youdao.com/)同源
    同源策略是浏览器的一种安全策略，所谓同源是指，域名，协议，端口完全相同。
    
### 常见的跨域场景
```
URL                                      说明                    是否允许通信
http://www.domain.com/a.js
http://www.domain.com/b.js         同一域名，不同文件或路径           允许
http://www.domain.com/lab/c.js

http://www.domain.com:8000/a.js
http://www.domain.com/b.js         同一域名，不同端口                不允许
 
http://www.domain.com/a.js
https://www.domain.com/b.js        同一域名，不同协议                不允许
 
http://www.domain.com/a.js
http://192.168.4.12/b.js           域名和域名对应相同ip              不允许
 
http://www.domain.com/a.js
http://x.domain.com/b.js           主域相同，子域不同                不允许
http://domain.com/c.js
 
http://www.domain1.com/a.js
http://www.domain2.com/b.js        不同域名                         不允许
```

### 跨域的解决方案
- 通过`jsonp`跨域
- document.domain + iframe跨域
- location.hash + iframe
- window.name + iframe跨域
- postMessage跨域
- 跨域资源共享(CORS)
- nginx代理跨域
- nodejs中间件代理跨域
- webSocket协议跨域


#### 通过`jsonp`跨域
在js中，我们直接用`XMLHttpRequest`请求不同域上的数据时，是不可以的。但是，在页面上引入不同域上的JS脚本文件却是可以的，`jsonp`正是利用这个特性来实现的。


[参考链接](https://github.com/happylindz/blog/issues/3)