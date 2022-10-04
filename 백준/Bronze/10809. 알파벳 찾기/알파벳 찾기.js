const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const alphabet = new Array(26).fill(-1);

input.forEach((char, index) => {
  if (alphabet[char.charCodeAt() - 97] === -1) {
    alphabet[char.charCodeAt() - 97] = index;
  }
});
console.log(alphabet.join(" "));