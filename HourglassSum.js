function hourglassSum(arr) {
    const hourglassArr = [ [0,0], [1,0],[2,0],[1,1],[0,2],[1,2],[2,2]];
    let maxSum = null;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = 0;
            
            for (let k = 0; k < hourglassArr.length; k++) {
                sum += arr[j + hourglassArr[k][1]][i + hourglassArr[k][0]];
            }
            maxSum = maxSum != null ? Math.max(maxSum, sum) : sum;
        }
    }
    return maxSum;

}
