var http = require('http');
var fs = require('fs');
var route = require('./router');

filepath = __dirname+'/file/';

function startServer(router) {
    var onRequest = function(request, response) {
        console.log('Request received ' + request.url);
        route(router,request.url,response);
        // if (request.url === '/' || request.url === '/home') {
        //     response.writeHead(200, { 'Content-Type': 'text/html' });
        //     fs.createReadStream(filepath + '/index.html', 'utf8').pipe(response);
        // } else if (request.url === '/review') {
        //     response.writeHead(200, { 'Content-Type': 'text/html' });
        //     fs.createReadStream(filepath + '/review.html', 'utf8').pipe(response);
        // } else if (request.url === '/api/v1/records') {
        //     response.writeHead(200, { 'Content-Type': 'application/json' });
        //     var jsonObj = {
        //         name: "hfpp2012"
        //     };
        //     response.end(JSON.stringify(jsonObj));
        // } else {
        //     response.writeHead(200, { 'Content-Type': 'text/html' });
        //     fs.createReadStream(filepath + '/404.html', 'utf8').pipe(response);
        // }
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer;