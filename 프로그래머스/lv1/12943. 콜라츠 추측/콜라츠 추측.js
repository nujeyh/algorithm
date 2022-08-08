function solution(n) {
    let i = 0;

    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = n * 3 + 1
        }
        i++;
        if (i === 500) return -1;
    }

    return i;
}