const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[1].split(' ');
let count = 0;

numbers.forEach((el) => {
  if (+el === +input[2]) count++;
})
console.log(count);