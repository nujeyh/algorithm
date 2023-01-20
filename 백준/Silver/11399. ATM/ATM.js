const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const people = input[1].split(' ').map(Number);

function ATMTime (P) {
  let result = 0;
  let prev = 0;
  
  P.sort((a, b) => a - b);
  P.forEach((time) => {
    prev += time; 
    result += prev;
  })
  return result;
}

console.log(ATMTime(people));