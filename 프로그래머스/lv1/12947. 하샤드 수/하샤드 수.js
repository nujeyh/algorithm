function solution(x) {
    let s = [...String(x)];
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        sum += +s[i]
    }

    return x % sum === 0 ? true : false;
}