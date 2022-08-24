const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length; i++) {
    let [a, b] = input[i].split(' ');
    if(+a + +b === 0) return false;
    console.log(+a + +b);
}