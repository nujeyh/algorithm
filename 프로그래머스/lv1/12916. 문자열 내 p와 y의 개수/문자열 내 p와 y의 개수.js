function solution(s){
    let pCount = 0;
    let yCount = 0;
    
    let str = s.toLowerCase();
    
    for (let i=0; i<s.length; i++) {
        if (str[i] == 'p') {
            pCount++;
        } else if (str[i] == 'y') {
            yCount++;
        }
    }
    return pCount == yCount? true : false;
}