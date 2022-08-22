const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let sum = '';

for (let i = 1; i <= input[0]; i++) {
     let num = input[i].split(' ');
     sum += +num[0] + +num[1] + '\n';
 }
console.log(sum);