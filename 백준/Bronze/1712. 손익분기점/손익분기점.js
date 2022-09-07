let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let money = -input[0];
let sell = input[2] - input[1];
let count = 0;

if (sell <= 0) {
  console.log(-1);
  return false;
}

while (money <= 0) {
  money += sell;
  count++;
}

console.log(count);