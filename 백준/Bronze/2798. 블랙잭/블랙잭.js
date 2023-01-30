const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function blackjack(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const cards = input[1].split(" ").map(Number);
  let result = 0;

  for (let i = 0; i < N; i++) {
    let tmp = 0;
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        tmp = cards[i] + cards[j] + cards[k];        
        if (tmp === M) return M;
        if (result < tmp && tmp < M) result = tmp;
      }
    }
  }
  return result;
}

console.log(blackjack(input));