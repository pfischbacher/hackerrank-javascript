// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  //console.log('flowers:', c);
  c = c.sort((a,b) => a - b);
  let result = 0;
  let count = 0;
  let multiplier = 1;
  for (let i = c.length - 1; i >= 0; i--) {
    if (count === k) {
      multiplier++;
      count = 1;
    } else {
      count++;
    }
    result += c[i] * multiplier;
  }
  return result;
}
