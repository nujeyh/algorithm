function solution(arr) {
    const answer = [];

    arr.forEach((element, index) => {
        if( arr[index] !== arr[index - 1]) {
            answer.push(arr[index]);
        }
    })
    
    return answer;
}