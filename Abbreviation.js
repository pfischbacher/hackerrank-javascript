// Complete the abbreviation function below.
function abbreviation(a, b) {
  const dp = new Array(a.length + 1);
  dp[0] = new Array(b.length + 1).fill(0);
  dp[0][0] = 1;

  let isUpperCase = false;

  for (let i = 0; i < a.length; i++) {
    dp[i + 1] = new Array(b.length + 1).fill(0);
    if (a[i] === a[i].toUpperCase() || isUpperCase ) {
      isUpperCase = true;
      dp[i + 1][0] = 0;
    } else {
      dp[i + 1][0] = 1;
    }
  };

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        dp[i + 1][j + 1] = dp[i][j];
      } else if (a[i].toUpperCase() === a[i]) {
        dp[i + 1][j + 1] = 0;
      } else if (a[i].toUpperCase() === b[j]) {
        dp[i + 1][j + 1] =  dp[i][j] || dp[i][j + 1];
      } else {
        dp[i + 1][j + 1] = dp[i][j + 1];
      }
    }
  }

  return dp[a.length][b.length] ? 'YES' : 'NO';
}
