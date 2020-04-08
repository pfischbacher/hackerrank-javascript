function arrayManipulation(n, queries) {
    let maxSum = 0;
    let sum = 0;
    let arr = new Array(n).fill(0);
    for (let query of queries) {
        arr[query[0]-1] += query[2];
        if (query[1] < n) {
            arr[query[1]] -= query[2];
        }
    }

    for (let value of arr) {
        sum += value;
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;

}
