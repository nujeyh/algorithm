function solution(s, n) {
    let answer = s.split('').map((el) => {
        if (el !== ' ') {
            let ascii = el.charCodeAt(0) + n;

            if (/^[A-Z]$/.test(el) && ascii > 90) ascii -= 26;
            if (/^[a-z]$/.test(el) && ascii > 122) ascii -= 26;

            return String.fromCharCode(ascii);
        }
        return el;
    })
    return answer.join('');
}