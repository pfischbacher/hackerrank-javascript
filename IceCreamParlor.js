// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
  const hashArr = {}

  for (let i = 0; i < cost.length; i++)  {
    if (! hashArr[cost[i]]) {
      hashArr[cost[i]] = new Array();
    }
    hashArr[cost[i]].push(i + 1);
  }
  cost.sort((a,b) => a - b);

  for (let i = 0; i < cost.length - 1; i++)  {
    let a = cost[i];
    if (hashArr[money - a]) {
      if ( a === money - a) {
        console.log(hashArr[a][0], hashArr[a][1]);
        return;
      }
      let first = Math.min(hashArr[a][0], hashArr[money - a][0]);
      let second = Math.max(hashArr[a][0], hashArr[money - a][0]);
      console.log(first, second);
      return;
    }
  }
}
