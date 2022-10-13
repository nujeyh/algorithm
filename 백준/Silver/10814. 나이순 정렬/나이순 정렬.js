const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
input.sort((a, b) => {
  if (+a.split(' ')[0] < +b.split(' ')[0]) return -1;
});
console.log(input.join('\n'));