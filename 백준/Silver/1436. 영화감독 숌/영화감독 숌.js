const input = require('fs').readFileSync('/dev/stdin');

function doomNumber(N) {
  let i = 665;

  while (N > 0) {
    i++;
    if (i.toString().includes('666')) N--;
  }
  return i;
}

console.log(doomNumber(input));