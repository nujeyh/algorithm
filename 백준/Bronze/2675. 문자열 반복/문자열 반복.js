const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  let str = input[i].trim().split(" ");
  let repeated = [];
  for (let j = 0; j < str[1].length; j++) {
    repeated.push(str[1][j].repeat(+str[0]));
  }
  console.log(repeated.join(""));
}