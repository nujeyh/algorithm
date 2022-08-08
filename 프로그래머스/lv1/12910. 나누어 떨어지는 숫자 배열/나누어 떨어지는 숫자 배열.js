function solution(arr, divisor) {
    let divResult = [];
    let tmp;
    
    for (let i =0; i<arr.length; i++) {
        if (arr[i]%divisor == 0) {
            divResult.push(arr[i]);        
        }
    }    
    
    if (divResult.length > 0) {
        for (let i=0; i<divResult.length; i++) {
            for (let j=0; j<divResult.length; j++){
                if (divResult[j] > divResult[j+1]) {
                    tmp = divResult[j+1];
                    divResult[j+1] = divResult[j];
                    divResult[j] = tmp
                }
            }
        }
    } else { return [-1]; }

    return divResult;
}