// Complete the activityNotifications function below
function activityNotifications(expenditure, d) {
  let i = 0;
  let notifications = 0;
  let runningCount = new Array(201).fill(0);
  while (i <= expenditure.length) {
    if (i >= d ) {
      let median = getMedian(runningCount, d);
      if (expenditure[i] >= 2 * median) {
        notifications++;
      }
      runningCount[expenditure[i - d]]--;
    }
    runningCount[expenditure[i]]++;
    i++;
  }
  return notifications;

}

function getMedian(values, d) {
  let median, value1, value2;
  let mid = Math.floor(d / 2);
  let sum = 0;
  let i = 0;
  if (d % 2 == 0) {
    while ( sum <= mid + 1 ) {
      sum += values[i];
      if (!value1 && sum >= mid ) {
        value1 = i;
      }
      if (sum >= mid + 1) {
        value2 = i;
        break;
      }
      i++;
    }
    // Even
    median = (value1 + value2)/2;
  } else {
    // Odd
    while ( sum <= mid ) {
      sum += values[i];
      if (sum > mid ) { // Have to be careful here because mid is an int due to Math.floor
        value1 = i;
        break;
      }
      i++;
    }
    median = value1;
  }
  return median;
}

