var sum = 0;
var size = 7;
var checkFibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return checkFibonacci(num - 1) + checkFibonacci(num - 2);
};
var showFibonacci = function (size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(checkFibonacci(i));
        sum += checkFibonacci(i);
    }
    return arr;
};
console.log(size + "số fibonacci đâu tiên: " + showFibonacci(size));
console.log("Tổng " + size + " số fibonacci đầu tiên: " + sum);
