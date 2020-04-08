// Complete the countInversions function below.
function countInversions(arr) {
  increaseCounter('start');
  const results = mergeSort(arr);
  const count = increaseCounter('value');
  return count;
}

function mergeSort(arr) {
  if (arr.length > 1) {
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
  } 
  return arr;
}

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
      increaseCounter(left.length);
    }
  }
  results = [...results, ...left, ...right];

  return results;

}

const increaseCounter = (function () {
  let counter = 0;
  return function (value = null) {
    if (!value) {
      counter += 1; 
    }
    else if (value === "start") {
      counter = 0;
    } else if (value === "value") {
      return counter;
    } else  {
      counter += value; 
    }
    return counter;
  }
})();


