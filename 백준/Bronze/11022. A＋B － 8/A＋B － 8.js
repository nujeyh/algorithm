const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

 for (let i = 1; i <= input[0]; i++) {
      let num = input[i].split(' ');
      console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${+num[0] + +num[1]}`)
  }