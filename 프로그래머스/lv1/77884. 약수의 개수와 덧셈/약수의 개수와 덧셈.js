function divisorCounter(number) {
    let count = 1;
    for (let i = 1; i <= number/2; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        if (divisorCounter(i)%2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}