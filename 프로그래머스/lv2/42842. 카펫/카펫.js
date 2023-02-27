function solution(brown, yellow) {
  const area = brown + yellow;
  const length = brown + 4;
  const divisors = getDivisor(area);

  for (let i = 0; i < divisors.length; i++) {
    for (let j = 1; j < divisors.length; j++) {
      if (
        divisors[i] + divisors[j] === length / 2 &&
        divisors[i] * divisors[j] === area
      )
        return [divisors[i], divisors[j]].sort((a, b) => b - a);
    }
  }
}

function getDivisor(num) {
  const divisors = [];
  
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }
  return divisors;
}