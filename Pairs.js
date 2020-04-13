// Complete the pairs function below.
function pairs(k, arr) {
  let count = 0;
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = arr[i] + k;
  }
  
  for (let value in hashMap) {
    console.log(value, hashMap[value]);
    if (hashMap[hashMap[value]]) {
      count++;
    }
  }
  
  return count;
}
