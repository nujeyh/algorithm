function solution(n, m) {
    const answer = [];
    let remain = 0;
    
    answer.push(n * m);
    
    while (m != 0) {
        remain = n % m;
        n = m;
        m = remain;  
    }
    
    answer.unshift(n);
    answer[1] /= n;
    
    return answer;
}