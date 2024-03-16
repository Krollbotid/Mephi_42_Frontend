let arr1 = [1, 2, 3]
Array.prototype.duplicateReverse = function() {
    return this.concat(this.slice());
};


var arr = [1, 2, 3, 4, 5];
var result = arr.duplicateReverse();

console.log(result);
