function solution(n) {
    let trit = n.toString(3);
    return parseInt([...trit].reverse().join(''),3);
}