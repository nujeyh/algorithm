function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; budget >= 0; i++) {
        budget -= d[i];
        if (budget >= 0) answer += 1;
    }
    return answer;
}