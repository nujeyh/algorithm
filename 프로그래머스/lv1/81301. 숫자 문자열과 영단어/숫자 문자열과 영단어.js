function solution(s) {
  let answer = s;
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  
  words.forEach((word, index) => {
    answer = answer.split(word).join(index);
  })
  return +answer;
}