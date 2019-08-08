var express = require('express'),
    app = express(),
    proxy = require('http-proxy-middleware'),
    config = require('./config.json'),
    port = process.env.PORT || 3000;

var options = {
        target: config.cduestc.url, 
        changeOrigin: true,
        pathRewrite: {
            '^/api' : '/'
        }
    };

app.use('/api', proxy(options));
var routes = require('./routes/index.js');
routes(app);  

app.listen(port);

console.log('cduestc RESTful API server started on: ' + port);