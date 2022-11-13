function solution(n, words) {
    let wordCheck = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i - 1][words[i - 1].length - 1] !== words[i][0] || wordCheck.includes(words[i])) {
            let answer = [(i+1)%n, Math.ceil((i+1)/n)]
            if(answer[0] === 0) answer[0] = n;
            return answer;
        }
        wordCheck.push(words[i])
    }
    return [0,0];
}