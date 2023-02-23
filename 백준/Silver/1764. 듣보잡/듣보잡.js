const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function dutbojob(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const listen = new Set(input.slice(1, N + 1));
  const see = new Set(input.slice(N + 1));
  const result = [...listen].filter((el) => see.has(el));
  
  result.sort();
  result.unshift(result.length);
  
  return result.join('\n');
}

console.log(dutbojob(input));