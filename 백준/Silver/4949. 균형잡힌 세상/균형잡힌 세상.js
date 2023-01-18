const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function isVPS(s) {
  const stack = [];
  let i = 0;
  
  while (s[i] !== '.') {
    switch (s[i]) {
      case '(':
        stack.push('(');
        break;
      case ')':
        if (stack[stack.length - 1] === '(') stack.pop();
        else return false;
        break;
      case '[':
        stack.push('[');
        break;
      case ']':
        if (stack[stack.length - 1] === '[') stack.pop();
        else return false;
        break;
    }
    i++;
  }
  return !stack.length;
}

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '.') {
    console.log(isVPS(input[i]) ? "yes" : "no");
  }
}