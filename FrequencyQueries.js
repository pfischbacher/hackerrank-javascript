function freqQuery(queries) {
  const store = {};
  const results = [];
  let frequencies = {};

  for (let query of queries) {
    let value = query[1];
    if (query[0] === 1) {
      store[value] = store[value] ? store[value] + 1 : 1;
      frequencies = updateFrequencies(frequencies, store[value] - 1, store[value], value);
    } else if (query[0] === 2) {
      store[value] = store[value] > 0 ? store[value] - 1 : 0;
      frequencies = updateFrequencies(frequencies, store[value] + 1, store[value], value);
    } else if (query[0] === 3) {
      let printOut = frequencies[value] && Object.keys(frequencies[value]).length ? 1 : 0;
      results.push(printOut);
    }
  }
  return results;

}

function updateFrequencies(frequencies, oldFreq, newFreq, value) {
  if (frequencies[oldFreq]) {
    delete frequencies[oldFreq][value];
  }
  if ( ! frequencies[newFreq]) {
    frequencies[newFreq] = {};
  }
  frequencies[newFreq][value] = 1;
  return frequencies;
}
