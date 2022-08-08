function solution(n) {
    if (n%2 === 1) return 2;
    if (n%3 === 1) return 3;
    for (let i = 4; i < n; i++){
        if( n%i === 1) return i;
    }
}