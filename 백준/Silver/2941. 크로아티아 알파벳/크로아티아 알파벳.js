let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const alphabet = ['c=','c-','dz=','d-','lj','nj','s=','z='];

alphabet.forEach((char) => {
  input = input.split(char).join('@');
})

console.log(input.length);