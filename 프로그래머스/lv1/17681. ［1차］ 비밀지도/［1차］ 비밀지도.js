function decimalToBinary(n, arr) {
  let binaryArr = [];
  
  arr.forEach((num) => {
    let binaryNum = num.toString(2);

    if (binaryNum.length < n) {
      binaryNum = "0".repeat(n - binaryNum.length) + binaryNum;
    }
    binaryArr.push(binaryNum);
  });
    return binaryArr;
}

function solution(n, arr1, arr2) {
  const map1 = decimalToBinary(n, arr1);
  const map2 = decimalToBinary(n, arr2);
  let answer = [];
  
  for (let i = 0; i < n; i++) {
    let decode = '';
    
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === '1' || map2[i][j] === '1') {
        decode += '#';
      } else {
        decode += ' ';
      }
    }
    answer.push(decode)
  }
  return answer;
}