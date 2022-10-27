const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

console.log(input.reduce((a, b) => a + b)/5);
console.log(input[2]);