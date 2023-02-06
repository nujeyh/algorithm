const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function stringSet (input) {
  const [N, M] = input[0].split(' ').map(Number);
  const S = new Set(input.slice(1, N + 1));
  const stringArr = input.slice(N + 1, N + M + 1);
  let count = 0;
  
  stringArr.forEach((el) => {
    if (S.has(el)) count++;
  })
  return count;
}

console.log(stringSet(input));