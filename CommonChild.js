// Complete the commonChild function below.
function commonChild(s1, s2) {
  let dp = new Array(s1.length);
  dp[0] = new Array(s2.length + 1).fill(0);

  for(let i = 0; i < s1.length; i++){
    dp[i+1] = new Array(s2.length + 1).fill(0);
    for(let j = 0; j < s2.length; j++){
      if (s1[i] === s2[j]) {
        dp[i+1][j+1] = dp[i][j] + 1;
      } else {
        dp[i+1][j+1] = Math.max(dp[i][j], dp[i + 1][j], dp[i][j+1]);
      }
    }
  }
  return dp[s1.length][s2.length];
}

// Avoid the complete matrix.
// Complete the commonChild function below.
function commonChild(s1, s2) {
  let prev_row = new Array(s2.length + 1).fill(0);

  for(let i = 0; i < s1.length; i++){
    let row = new Array(s2.length + 1).fill(0);
    for(let j = 0; j < s2.length; j++){
      if (s1[i] === s2[j]) {
        row[j + 1] = prev_row[j] + 1;
      } else {
        row[j+ 1] = Math.max(prev_row[j], row[j], prev_row[j + 1] );
      }
 //     console.log(row);
    }
    prev_row = row;
  }
  return prev_row[s2.length];
}

