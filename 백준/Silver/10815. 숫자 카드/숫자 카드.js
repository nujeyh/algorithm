const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const myCards = new Set(input[1].split(' '));
const compare = input[3].split(' ');
const result = [];

compare.forEach((num) => {
  if (myCards.has(num)) result.push(1);
  else result.push(0);
})
console.log(result.join(' '));
