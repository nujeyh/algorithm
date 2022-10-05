const input = require('fs').readFileSync('/dev/stdin').toString().split('');

const dial = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
let seconds = 0;

input.forEach((char) => {
  dial.forEach((group, index) => {
    if (group.includes(char)) {
      seconds += index + 3;
    }
  });
});
console.log(seconds);