const input = require('fs').readFileSync('/dev/stdin');

function digitGenerator(N) {
  for (let i = 0; i <= N; i++) {
    if (i < 10) {
      if (i + i === N) return i;
    } else {
      if (i + i.toString().split('').reduce((a, b) => +a + +b) === N) return i;
    }
  }
  return 0;
}
console.log(digitGenerator(+input));