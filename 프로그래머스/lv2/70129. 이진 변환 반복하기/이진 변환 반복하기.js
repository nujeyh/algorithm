function solution(s) {
    let count = [0, 0];
    
    while (s !== '1') {
        let prevLength = s.length;

        s = s.split('0').join('');
        count[1] += prevLength - s.length;
        count[0]++;
        s = s.length.toString(2);
    }
    return count;
}