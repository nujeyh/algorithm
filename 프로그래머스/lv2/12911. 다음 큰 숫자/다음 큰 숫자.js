function solution(n) {
    let i = n + 1;
    let nCount = n.toString(2).split('0').join('').length;
    
    while (true) {
        if (i.toString(2).split('0').join('').length === nCount) return i;
        i++;
    }
}