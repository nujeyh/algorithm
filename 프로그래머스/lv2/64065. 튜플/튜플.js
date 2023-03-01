function solution(s) {
  const hash = new Map();
  const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
  const answer = [];

  arr.forEach((nums) => {
    nums.forEach((num) => {
      if (hash.has(num)) hash.set(num, hash.get(num) + 1);
      else hash.set(num, 1);
    });
  });

  for (item of hash) {
    answer[Math.abs(item[1] - hash.size)] = item[0];
  }
  return answer;
}