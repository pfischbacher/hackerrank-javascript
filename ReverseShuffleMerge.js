// Complete the reverseShuffleMerge function below.
function reverseShuffleMerge(s) {
  const result = [];
  const charMap = {};
  const charCount = {};
  let i = 0;
  console.log(s);

  s = s.split('').reverse().join('');

  // Character Hash
  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = charCount[s[i]] ? charCount[s[i]] + 1 : 1;
    charMap[s[i]] = Math.floor(charCount[s[i]] / 2);
  }
  
  while (result.length < s.length / 2) {
    let minPosition = null;
    while (charCount[s[i]] >= charMap[s[i]]) {
      if (charMap[s[i]] > 0 && (minPosition === null || s[i] < s[minPosition])) {
        minPosition = i;
      }
      charCount[s[i]]--;
      if (charCount[s[i]] >= charMap[s[i]]) {
        i++;
      }
    }

    for (let j = minPosition + 1; j <= i; j++) {
      charCount[s[j]]++;
    }

    charMap[s[minPosition]]--;
    i = minPosition + 1;
    result.push(s[minPosition]);
  }

  return result.join('');
}

