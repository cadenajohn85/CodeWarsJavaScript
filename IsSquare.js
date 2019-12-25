var isSquare = function(n){
    // return Number.isInteger(Math.pow(n, .5));
    return Math.sqrt(n) % 1 === 0;
};