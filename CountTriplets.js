function countTriplets(arr, r) {
  let count = 0;
  const tripletHash2 = {};
  const tripletHash3 = {};
  let i = 0;
  while(i < arr.length) {
    if (tripletHash3[arr[i]]) {    
        count += tripletHash3[arr[i]];
    }
    if (tripletHash2[arr[i]]) { 
      tripletHash3[arr[i]*r] = tripletHash3[arr[i]*r] ? tripletHash3[arr[i]*r] + tripletHash2[arr[i]] : tripletHash2[arr[i]] ;
    }
    tripletHash2[arr[i]*r] = tripletHash2[arr[i]*r] ? tripletHash2[arr[i]*r] + 1 : 1;      
    i++;
  }

  return count;
}
