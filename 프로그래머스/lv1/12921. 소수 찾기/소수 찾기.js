function isPrime(n) {
    for (let i = 2; i*i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n) {
    let answer = 1;
    for (let i = 3; i <= n; i += 2) {
        if (isPrime(i) === true) answer += 1;
    }
    return answer;
}