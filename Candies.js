// Complete the candies function below.
function candies(n, arr) {
  let dp = new Array(n).fill(1);
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1] ) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >=0; i--) {
    if (arr[i] > arr[i + 1] ) {
      dp[i] = Math.max(dp[i], dp[i + 1] + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    sum += dp[i];
  }

  return sum;
  
}
