function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach((el) => {
        if (el[0] > el[1]) {
            if (maxWidth < el[0]) maxWidth = el[0];
            if (maxHeight < el[1]) maxHeight = el[1];
        } else {
            if (maxWidth < el[1]) maxWidth = el[1];
            if (maxHeight < el[0]) maxHeight = el[0];
        };
    })
    return maxWidth * maxHeight;
}