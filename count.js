var counter = function(arr){
    return "threre are "+arr.length+ " elements in the array"
}
function adder(a,b){
    return a+"+"+b+"="+(a+b);
}


module.exports = {
    count: counter,
    add: adder
};