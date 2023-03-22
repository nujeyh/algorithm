function solution(N, A, B) {
    let answer = 1;
    
    while (N > 0) {
        if (Math.ceil(A/2) === Math.ceil(B/2)) break;
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        N /= 2;
        answer++;
    }
    return answer;
}