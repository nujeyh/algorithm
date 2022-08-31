const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let currentHour = +input[0].split(" ")[0];
let currentMin = +input[0].split(" ")[1];

let cookingHour = Math.floor(+input[1] / 60);
let cookingMin = +input[1] % 60;

let answer = [];

if (currentMin + cookingMin > 60) {
  answer.unshift(currentMin + cookingMin - 60);
  cookingHour += 1;
} else {
  answer.unshift(currentMin + cookingMin);
}

if (currentMin + cookingMin === 60) {
  cookingHour += 1;
  answer[0] = 0;
}

if (currentHour + cookingHour > 23) {
  answer.unshift(currentHour + cookingHour - 24);
} else {
  answer.unshift(currentHour + cookingHour);
}

console.log(answer.join(" "));