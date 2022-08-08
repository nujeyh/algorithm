function solution(s) {
    let str = s.split(' ');
    let answer = [];
    
    for (let i=0; i < str.length; i++) {
        for (let j=0; j<str[i].length; j++) {
            j % 2 === 0 ? 
                answer.push(str[i][j].toUpperCase()) :
                answer.push(str[i][j].toLowerCase());
        }
        answer.push(' ');
    }
    answer.pop();
    return answer.join('');
}