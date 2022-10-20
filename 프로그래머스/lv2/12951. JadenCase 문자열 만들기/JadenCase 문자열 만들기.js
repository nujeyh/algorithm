function solution(s) {
    let answer = s.split(' ');
    answer.forEach((word, i) => {
        if (word !== '') {
            answer[i] = word[0].toUpperCase() + word.toLowerCase().slice(1,);
        } else {
            
        }
    })
    return answer.join(' ');
}