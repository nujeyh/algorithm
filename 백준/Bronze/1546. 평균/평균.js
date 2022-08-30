let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let score = input[1].split(" ").map(Number);
score.sort((a, b) => b - a);
let biggest = score[0];
score = score.map((el) => (el / biggest) * 100);
let answer = score.reduce((prev, curr) => prev + curr) / +input[0];

console.log(answer);