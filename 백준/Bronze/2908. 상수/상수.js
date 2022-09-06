const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = [...input[0]].reverse().join("");
const b = [...input[1]].reverse().join("");

console.log(+a > +b ? a : b);