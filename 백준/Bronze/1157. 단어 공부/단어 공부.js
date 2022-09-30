let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const count = new Array(26).fill(0);

input = input.toUpperCase();
input = input.split("");

input.forEach((char) => {
  const index = char.charCodeAt();
  count[index - 65]++;
});

const maxValue = Math.max(...count);

console.log(
  count.indexOf(maxValue) === count.lastIndexOf(maxValue)
    ? String.fromCharCode(count.indexOf(maxValue) + 65)
    : "?"
);