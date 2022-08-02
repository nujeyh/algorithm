const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

console.log(+inputData[0] / +inputData[1]);