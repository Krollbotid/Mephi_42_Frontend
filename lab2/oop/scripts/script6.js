let arr1 = [1, 3 ,4]
let old_reverse = Array.prototype.reverse
Array.prototype.reverse = function() {
    return this.concat(this.slice());
};


let arr = [1, 2, 3, 4, 5];
let result = arr.reverse();


console.log(result);
