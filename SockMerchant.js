function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    for (let i = 0; i < ar.length; i++) {
        socks[ar[i]] = socks[ar[i]] == null ? 1 : socks[ar[i]] + 1;
    }
   
    for (let colour in socks) {
        pairs += Math.floor(socks[colour]/2);
    }

    return pairs;
}
