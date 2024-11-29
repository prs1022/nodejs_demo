var fs = require('fs');

var readMeOne = fs.readFile("readme.txt", "utf8", function(err, data) {
    var waitTill = new Date(new Date().getTime() + 1 * 1000);
    while (waitTill > new Date()) {}
    console.log("first async");
});

var readMeTwo = fs.readFile("readme.txt", "utf8", function(err, data) {
    var waitTill = new Date(new Date().getTime() + 3 * 1000);
    while (waitTill > new Date()) {}
    console.log("second async");
});

console.log("finished111");



// var fs = require('fs');

// var readMe = fs.readFile("./file/readme.txt", "utf8", function(err, data) {
//     fs.writeFile('writeMe.txt', data, function() {
//         console.log('writeMe has finished');
//     })
// });

// var waitTill = new Date(new Date().getTime() + 5 * 1000);
// while (waitTill > new Date()) {}

console.log("finished222");