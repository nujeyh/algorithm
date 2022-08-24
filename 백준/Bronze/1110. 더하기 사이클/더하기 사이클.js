const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let cycle = 0;
let num = +input;

while (true) {
  let sum = (num % 10) + Math.floor(num / 10);
  num = (num % 10) * 10 + (sum % 10);
  cycle++;
  if (+num === +input) break;
}

console.log(cycle);
