function countingValleys(n, s) {
    let d = 0;
    let u = 0;
    let count = 0;
    let inValley = false;
    for (let char of s) {
      if (char === 'D') {
          d++;
          if (d > 0) {
              inValley = true;
          }
      } else {
          d--;
      }
      if (d == 0 && inValley) {
          console.log('count', u, d);
          count++
          d = 0;
          u = 0;
          inValley = false;
      }
    }
    return count;

}
