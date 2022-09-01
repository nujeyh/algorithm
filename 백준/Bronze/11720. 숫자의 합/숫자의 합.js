const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split('').map(Number);

console.log(numbers.reduce((prev, curr) => prev + curr ));