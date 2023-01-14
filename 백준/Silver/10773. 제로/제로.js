const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const stack =[];

for (let i = 1; i <= input[0]; i++) {
  if (input[i] === 0) stack.pop();
  else stack.push(input[i]);
}
console.log(stack.length === 0 ? 0 : stack.reduce((a, b) => a + b));