// https://www.freecodecamp.org/news/how-to-solve-the-sherlock-and-anagrams-coding-challenge-in-javascript-a80baa908637/

function sherlockAndAnagrams(s) {
    const results = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length + 1; j++) {
          let subStr = s.slice(i,j).split('').sort().join('');
          results[subStr] = results[subStr] > 0 ? results[subStr] + 1 : 1;
          count += results[subStr] - 1;
        }
    }
    return count;
}


tests = [
  {
    data: 'abba',
    expect: 4
  },
  {
    data: 'abcd',
    expect: 0
  }
];

for (let test of tests) {
  console.log(sherlockAndAnagrams(test.data), 'Expect:', test.expect);
}
