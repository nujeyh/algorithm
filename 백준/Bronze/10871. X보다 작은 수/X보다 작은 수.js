const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [N, X] = input[0].split(" ");
const numbers = input[1].split(" ");
let smallNumbers = [];

for (let i = 0; i < N; i++) {
  if (+X > +numbers[i]) smallNumbers.push(numbers[i]);
}

console.log(smallNumbers.join(" "));