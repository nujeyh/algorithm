const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0].split(' ')[0];
const k = input[0].split(' ')[1];
const scores = input[1].split(' ').map(Number);

scores.sort((a,b) => b - a);

console.log(scores[k-1]);