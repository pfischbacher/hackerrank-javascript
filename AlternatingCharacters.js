// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  const arr = s.split('');
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    }
  }
  return count;
}
