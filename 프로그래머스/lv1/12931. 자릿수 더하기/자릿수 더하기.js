function solution(N) {
    N = [...String(N)];
    let answer = 0;
    for (let i=0; i<N.length; i++) {
        answer += +N[i];
    }
    return answer;
}