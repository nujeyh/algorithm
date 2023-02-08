const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function symmetricDifference(input) {
  const A = new Set(input[1].split(' ').map(Number));
  const B = new Set(input[2].split(' ').map(Number));

  return difference(A,B).size + difference(B,A).size;
}

function difference(A, B) {
  const setA = new Set([...A]);
  for (let item of B) {
    setA.delete(item);
  }
  return setA;
}

console.log(symmetricDifference(input));