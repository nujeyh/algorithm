const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const students = [];
let i = 1;

while (students.length !== 2) {
  if (!input.includes(i)) {
    students.push(i);
  }
  i++;
}

console.log(students.join('\n'));