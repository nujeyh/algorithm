function solution(s) {
    let answer = s.split(' ').map(Number);
    return `${Math.min(...answer)} ${Math.max(...answer)}`;
}