var route = function(router,url, response){
    console.log('visit page:'+url);
    console.log(typeof router[url]);
    if(typeof router[url] == 'function'){
        //具体的handler处理
        router[url](response);
    }else{
        console.log('not found handler!!!');
        router['/notfound'](response);
    }
}


module.exports = route;
