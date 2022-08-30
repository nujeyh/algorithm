const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input[1].split(" ").map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[0] + " " + numbers[+input[0] - 1]);
