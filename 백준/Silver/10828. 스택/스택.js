const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

function numberStack (command) {
  const stack = [];
  const result =[];
  
  command.forEach((line) => {
    switch (line) {
      case 'top':
        result.push(stack[stack.length - 1] ?? -1);
        break;
      case 'size':
        result.push(stack.length);
        break;
      case 'empty':
        result.push(stack.length > 0 ? 0 : 1);
        break;
      case 'pop':
        result.push(stack.length > 0 ? stack.pop() : -1);
        break;
      default:
        stack.push(line.split(' ')[1]);
    }
  })
  console.log(result.join('\n'));
}

numberStack(input);