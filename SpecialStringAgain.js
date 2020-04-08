function substrCount(n, s) {
  let count = 0;
  let count_sequence = 0;
  let prev = '';

  for (let i = 0; i < s.length; i++) {
    count_sequence++;
    console.log('prev:' + prev, 's[i]:' + s[i]);
    if (i > 0 && prev != s[i]) {
      let midpoint = 1;
      while (i - midpoint >= 0 && i + midpoint < s.length && midpoint <= count_sequence) {
        console.log('i:' + i, 'midpoint:' + midpoint, 's[i]:' + s[i], 'prev:' + prev , 's[i - midpoint]:' + s[i - midpoint], 'next:' + s[i + midpoint]);
        if ( s[i - midpoint] === prev && prev === s[i + midpoint] ) {
          console.log('Increase Count & Midpoint.');
          console.log('*****************');
          //console.log('i:' + i, 'midpoint:' + midpoint, 'prev:' +s[i] , 's[i - midpoint]:' + s[i - midpoint], 'next:' + s[i + midpoint]);
          count++;
          midpoint++;
        } else {
          break;
        }
      }
      count_sequence = 1;
    }
    count += count_sequence;
    console.log('count:' + count);
    prev = s[i];

  }

  return count;
}
