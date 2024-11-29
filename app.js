// var count = require('./count')

// var add = require('./count').add




// console.log(count.count(['2','3','aa']))
// console.log(add(3,4))


// function callfunc(func,name){
//     func(name);
// }

// var hi = function(name){
//     console.log("hi "+name)
// }

// callfunc(hi,'nick')
var server = require('./myweb')
var handler = require('./myroute/handler')

var router={};

router['/']=handler.home;
router['/home']=handler.home;
router['/review']=handler.review;
router['/notfound']=handler.notfound;


server.startServer(router)

