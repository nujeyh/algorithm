const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let totalPrice = 0;

for (let i = 0; i < +input[1]; i++) {
    const [price, count] = input[i + 2].split(' ');
    totalPrice += +price * +count;
}

console.log(totalPrice === +input[0] ? "Yes" : "No");