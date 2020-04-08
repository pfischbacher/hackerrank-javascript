// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  arr = arr.sort();
  let result = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length; i++) {
   result = Math.min(Math.abs(arr[i] - arr[i-1]), result);
  }

  return result;
}
