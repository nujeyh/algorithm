const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
 
let answer = [0, 0];

for (let i = 0; i < input.length; i++) {
  if (input[i] > answer[0]) {
    answer[0] = input[i];
    answer[1] = i + 1;
  }
}
console.log(answer[0] + "\n" + answer[1]);