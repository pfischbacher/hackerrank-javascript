function maximumToys(prices, k) {
  prices = prices.sort((a,b) => a-b);
  let toys = 0;
  let i = 0;
  while (k > 0) {
    k -= prices[i];
    if (k > 0) {
      toys++;
    }
    i++;
  }

  return toys;
}
