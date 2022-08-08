function solution(arr) {
    if (arr.length === 1) return [-1];  
    let min = arr.indexOf(Math.min(...arr));
    arr.splice(min,1);
    return arr;
}