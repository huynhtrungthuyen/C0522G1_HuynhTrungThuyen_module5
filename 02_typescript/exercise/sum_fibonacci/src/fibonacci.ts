let checkFibonacci = function (num: number): number {
    if (num == 0) {
        return 0;
    }

    if (num == 1) {
        return 1;
    }

    return checkFibonacci(num - 1) + checkFibonacci(num - 2);
}

let sum: number = 0;
let size: number = 7;
let arr: Array<number> = [];
for (let i = 0; i < size; i++) {
    arr.push(checkFibonacci(i))
    sum += checkFibonacci(i);
}

console.log(size + "số fibonacci đâu tiên: " + arr);
console.log("Tổng " + size + " số fibonacci đầu tiên: " + sum);