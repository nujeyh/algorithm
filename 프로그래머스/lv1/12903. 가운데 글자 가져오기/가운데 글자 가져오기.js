function solution(s) {
    let answer = '';
    let l = s.length

    if ((l % 2) == 1) { 
        answer = s[(l/2) - 0.5];
    } else {
        answer = s[(l/2)-1] + s[l/2]
    }
    return answer;
}