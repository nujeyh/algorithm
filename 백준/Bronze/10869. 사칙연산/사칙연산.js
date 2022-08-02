const data = require('fs').readFileSync('dev/stdin').toString().split(' ');

console.log(+data[0] + +data[1]);
console.log(+data[0] - +data[1]);
console.log(+data[0] * +data[1]);
console.log(Math.floor(+data[0] / +data[1]));
console.log(+data[0] % +data[1]);