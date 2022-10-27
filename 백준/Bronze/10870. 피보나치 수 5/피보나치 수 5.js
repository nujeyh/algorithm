const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function fib(input) {
  if (input === 0) return 0;
  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 2; i < input; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}
console.log(fib(input));