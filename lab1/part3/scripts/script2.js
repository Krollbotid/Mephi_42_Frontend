function operate(arr) {
    var rests = arr.map(function(number) {
        return number % 5;
    });
    return rests;
}
  
var input = [10, 7, 3, 14, 6];
var restsarr = operate(input);
alert(restsarr);