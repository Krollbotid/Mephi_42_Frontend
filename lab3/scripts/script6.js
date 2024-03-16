let old_reverse = Array.prototype.reverse
Array.prototype.reverse = function() {
    return this.concat(this.slice());
};


var arr = [1, 2, 3, 4, 5];
var result = arr.reverse();

console.log(result);
