function solution(n) {
    let answer = [...String(n)];
    answer = answer.sort(function (a, b) { return b - a; });
    return +answer.join('');
}