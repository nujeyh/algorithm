const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function dungchi(input) {
  const N = +input[0];
  const result = [];
  input.shift();

  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      
      [x, y] = input[i].split(" ");
      [p, q] = input[j].split(" ");
      
      if (+x < +p && +y < +q) rank += 1;
    }
    result.push(rank);
  }
  return result.join(" ");
}
console.log(dungchi(input));