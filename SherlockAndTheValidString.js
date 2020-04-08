// Complete the isValid function below.
function isValid(s) {
  const charHash = {};
  const numberHash = {};

  for (let char of s) {
    charHash[char] = charHash[char] ? charHash[char] + 1 : 1;
  }

  for (let char in charHash) {
    numberHash[charHash[char]] = numberHash[charHash[char]] ? numberHash[charHash[char]] + 1 : 1;
  }

  let numberCount = 0;
  let amountCount = 0;

  for (let number in numberHash) {
    numberCount++;
    if (numberHash[number] === 1 && Number(number) === 1) {
      amountCount++;
    }
  }
  if (numberCount === 1) {
    return 'YES';
  } else if (numberCount === 2 && amountCount === 1) {
    return 'YES';
  } else {
    return 'NO';
  }
}
