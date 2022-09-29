const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const scores = input[i].split(" ").map(Number);
  const count = +scores[0];
  let average = 0;
  let pass = 0;

  scores.shift();
  average = scores.reduce((a, b) => a + b) / count;
  scores.forEach((score) => {
    if (score > average) pass++;
  });
  console.log((pass/count * 100).toFixed(3) + "%");
}
