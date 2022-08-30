let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.map((el) => el % 42);
input = [...new Set(input)];

console.log(input.length);