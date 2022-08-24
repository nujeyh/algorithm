const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

 for (let i = 0; i < input.length; i++) {
     let [a, b] = input[i].split(' ');
     console.log(+a + +b);
 }