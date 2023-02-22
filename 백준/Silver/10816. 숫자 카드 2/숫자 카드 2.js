const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function numberCard(input) {
  const result = [];
  const N = input[1].split(" ");
  const M = input[3].split(" ");
  const NMap = new Map();
  
  N.forEach((num) => {
    if (NMap.has(num)) NMap.set(num, NMap.get(num) + 1);
    else NMap.set(num, 1)
  })
  M.forEach((num) => {
    if (NMap.has(num)) result.push(NMap.get(num));
    else result.push(0);
  })
  return result.join(" ");
}

console.log(numberCard(input));
