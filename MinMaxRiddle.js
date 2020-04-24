// Complete the solve function below.
function riddle(arr) {
  let results = [];
  let stack = [];
  let windows = {};
  let windowsMax = {};
  arr.push(0);

  for (let i = 0; i < arr.length; i++) {
    let t = i;
    let j = arr[i];
    while (stack.length && stack[stack.length - 1][0] > j) {
      let tp = stack.pop();
      windows[j] = windows[j] ? Math.max(windows[j], i - tp[1] + 1) : i - tp[1] + 1;
      windows[tp[0]] = windows[tp[0]] ? Math.max(windows[tp[0]], i - tp[1]) : i - tp[1];
      t = tp[1];
    }
    stack.push([j, t]);
  }
  delete windows[0];

  for (let element in windows) {
    let index = parseInt(windows[element]);
    windowsMax[index] = parseInt(windowsMax[index]) > 0 ? Math.max(parseInt(windowsMax[index]), parseInt(element)) : parseInt(element);
  }

  for (let i = arr.length; i >= 1; i--) {
    if (!windowsMax[i] || windowsMax[i] < results[results.length - 1]) {
      results.push(results[results.length -1]);
    } else {
      results.push(windowsMax[i]);
    }
  }

  return results.reverse();
}

// Dynamic Programming Solution - Times out in 3 tests.
// Complete the solve function below.
function riddle(arr) {
    // solve here
    let results = new Array(arr.length);
    const dp = new Array(arr.length);
    dp[0] = arr; // Need to copy rather than reference?
    results = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
      dp[0][i] = arr[i];
      results[0] = Math.max(results[0], arr[i]);
    }
    for (let i = 1; i < arr.length; i++) {
      dp[i] = new Array(arr.length);
      for (let j = 0; j < arr.length - i; j++) {
        dp[i][j] = dp[i-1][j];
        for (let k = 1; k <= i; k++) {
          dp[i][j] = Math.min(dp[i][j], arr[j + k]);
        }
        results[i] = Math.max(results[i], dp[i][j]);
      }
    }
    return results;
}

