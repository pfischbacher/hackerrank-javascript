// Complete the minTime function below.
function minTime(machines, goal) {
  let products = 0;
  let mid;
  const machineHash = {};

  let lowerBound = null;
  let upperBound = null;

  for (let i = 0; i < machines.length; i++) {
    machineHash[machines[i]] = machineHash[machines[i]] ? machineHash[machines[i]] + 1 : 1;
    lowerBound = lowerBound ? Math.min(lowerBound, machines[i] * goal / machines.length) : machines[i] * goal / machines.length;
    upperBound = upperBound ? Math.max(upperBound, machines[i] * goal / machines.length) : machines[i] * goal / machines.length;
  }

  while ( lowerBound <= upperBound ) {
    mid = Math.ceil((lowerBound + upperBound ) / 2);
    let products = getProductsDays(mid, machineHash);

    if (products < goal) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid - 1;
    }
  }
  mid = Math.ceil((lowerBound + upperBound ) / 2);

  return mid;
}

function getProductsDays(days, machineHash) {
  let products = 0;
  for (let machine in machineHash) {
    products += Math.floor(days / machine) * machineHash[machine];
  }
  return products;
}
