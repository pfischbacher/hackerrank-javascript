// Complete the minimumPasses function below.
function minimumPasses(m, w, p, n) {
  let passes = 0;
  let candies = 0;

  while (candies < n) {
    let tmpM = m;
    let tmpW = w;
    m = Math.max(tmpM, tmpW);
    w = Math.min(tmpM, tmpW);
    let rate = m * w;
    if (candies < n) {
      let newPasses;
      if (candies < p) {
        newPasses = Math.ceil((Math.min(p, n) - candies)/ rate);
        passes = passes + newPasses;
        candies += newPasses * rate;
      } else {
        let diff = m - w;
        let purchases = Math.floor(candies / p);
        if (purchases < diff) {
          tmpW = w + purchases;
          tmpM = m;
        } else {
          purchases -= diff;
          tmpW = w + diff + Math.ceil(purchases / 2);
          tmpM = m + Math.floor(purchases / 2);
        }
        let newRate = tmpM * tmpW;
        if ((n - candies % p )/ newRate <= (n - candies) / rate) {
          rate = newRate;
          candies %= p;
          m = tmpM;
          w = tmpW;
          newPasses = Math.ceil((p - candies)/ rate);
        } else {
          newPasses = Math.ceil((n - candies)/ rate);

        }
        passes = passes + newPasses;
        candies += newPasses * rate;
      }
    }
  }

  return passes;
}
