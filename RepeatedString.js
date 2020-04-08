function repeatedString(s, n) {
    if (s.match(/a/g)) {
        const len = s.length;
        const aNum = s.match(/a/g) ? s.match(/a/g).length : 0;
        const aRemainder = s.slice(0, n % len).match(/a/g) ? s.slice(0, n % len).match(/a/g).length : 0;
    
        return Math.floor(n/len) * aNum + aRemainder;
    } else {
        return 0;
    }
}
