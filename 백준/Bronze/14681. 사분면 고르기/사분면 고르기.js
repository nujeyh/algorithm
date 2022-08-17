const input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

console.log(
    input[0] > 0 ? (input[1] > 0 ? 1 : 4) 
    : (input[1] > 0 ? 2 : 3)
);