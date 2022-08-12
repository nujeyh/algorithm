const input = require('fs').readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const origin = [1, 1, 2, 2, 2, 8];

let answer = input.map((el, i) => {
  return origin[i] - el;
})
console.log(...answer)