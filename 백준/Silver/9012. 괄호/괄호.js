const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function isVPS(s) {
  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack++;
    } else {
      stack--;
      if (stack < 0) return false;
    }
  }
  return !stack;
}

for (let i = 1; i <= +input[0]; i++) {
  console.log(isVPS(input[i]) ? "YES" : "NO");
}