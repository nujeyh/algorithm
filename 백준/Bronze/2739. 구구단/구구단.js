const input = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i < 10; i++) {
    console.log(`${input[0]} * ${i} = ${+input[0] * i}`);
}
