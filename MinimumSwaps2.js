function minimumSwaps(arr) {
    const hash = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== arr[i] - 1) {
            let j = hash[i + 1];
            hash[arr[i]] = j;
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            hash[i+1]=i;
            count++;
        }

    }

    return count;
}
