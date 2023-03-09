function solution(answers) {
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const count = [0, 0, 0];
    const result = [];
    
    answers.forEach((n, i) => {
        if (answers[i] === a[i % 5]) count[0]++;
        if (answers[i] === b[i % 8]) count[1]++;
        if (answers[i] === c[i % 10]) count[2]++;
    })
    count.forEach((n, i) => {
        if (n >= Math.max(...count)) result.push(i + 1);
    })
    return result;
}