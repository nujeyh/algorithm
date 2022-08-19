function solution(dartResult) {
  const reg = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = dartResult.match(reg);

  let score = result.map((el) => {
    if (/\d{2}[SDT]{1}[*|#]?/g.test(el)) {
      if (el[2] === "T") return 10 ** 3;
      if (el[2] === "D") return 10 ** 2;
      if (el[2] === "S") return 10;
    } else {
      if (el[1] === "T") return el[0] ** 3;
      if (el[1] === "D") return el[0] ** 2;
      if (el[1] === "S") return +el[0];
    }
  });
  result.map((el, index) => {
    if (el[2] === "#") score[index] *= -1;
    if (el[2] === "*") {
      score[index - 1] *= 2;
      score[index] *= 2;
    }
  });
  return score.reduce((prev, curr) => prev + curr, 0);
}