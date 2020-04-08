// Complete the maxMin function below.
function maxMin(k, arr) {
  arr = arr.sort((a,b) => a - b);
  let result = arr[k - 1] - arr[0];
  for ( let i = k - 1; i < arr.length; i++) {
    result = Math.min(result, arr[i] - arr[i - k + 1]);
  }

  return result;
}
