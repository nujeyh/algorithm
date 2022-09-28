let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let number = +input[0];

for (let i = 1; i <= number; i++) {
  let count = 0;
  let sum = 0;
  for(let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}