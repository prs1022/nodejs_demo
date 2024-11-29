var fs = require('node:fs');

const filepath = __dirname+'/../file';
var home = function(response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(filepath + '/index.html', 'utf8').pipe(response);
}

var review = function(response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(filepath + '/review.html', 'utf8').pipe(response);
}

var notfound = function(response){
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(filepath + '/404.html', 'utf8').pipe(response);
}



module.exports = {
    home: home,
    review: review,
    notfound:notfound
}