function solution(number) {
    let l = number.length
    let masking = '*'.repeat(l-4) // 문자열 뒤에서부터 4개 뺀만큼 *출력 
    + number.slice(l-4,l); //

    return masking;
}