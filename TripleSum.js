// Complete the triplets function below.
function triplets(a, b, c) {
  let count = 0

  let aSorted = [...new Set(a)].sort((a, b) => a - b);
  let bSorted = [...new Set(b)].sort((a, b) => a - b);
  let cSorted = [...new Set(c)].sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < bSorted.length) {
    while (j < aSorted.length && aSorted[j] <= bSorted[i]) {
      j++;
    }
    while (k < cSorted.length && cSorted[k] <= bSorted[i]) {
      k++;
    }
    count += j * k;
    i++;
  }

  return count;
}
