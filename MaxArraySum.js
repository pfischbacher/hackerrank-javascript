// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
  let dpSum = [];
  dpSum[0] = arr[0];
  dpSum[1] = arr[1];
  let max = arr[0];
  for (let i = 2; i < arr.length; i++) {
    max = Math.max(max, dpSum[i - 2], 0);
    dpSum[i] = max + arr[i];
  }

  return Math.max(max, 0, dpSum[arr.length - 1], dpSum[arr.length - 2]);
}
