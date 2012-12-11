
// adapted from http://thecodinghumanist.com/blog/archives/2011/5/6/serving-static-files-from-node-js

var port = 8125

var http = require('http');
var fs = require('fs');
var path = require('path');
 
http.createServer(function (request, response) {
     
    var filePath = '.' + request.url;
    
    try {
        if (fs.lstatSync(filePath).isDirectory()) {
            if (!filePath.match(/\/$/)) filePath += "/"
            filePath += 'index.html'
        }
    } catch (e) {}
    
    console.log("getting: " + filePath)
         
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }
     
    path.exists(filePath, function(exists) {
     
        if (exists) {
            fs.readFile(filePath, function(error, content) {
                if (error) {
                    
                    console.log("content: " + typeof(content))
                    console.log("contentType : " + contentType)
                    
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    
                    console.log("content: " + typeof(content))
                    console.log("contentType : " + contentType)
                    
                    if (!contentType.match(/^image/)) {
                        response.end(content, 'utf-8');
                    } else {
                        response.end(content);
                    }
                }
            });
        }
        else {
            response.writeHead(404);
            response.end();
        }
    });
     
}).listen(port);
 
console.log('Server running at http://localhost:' + port + '/');

