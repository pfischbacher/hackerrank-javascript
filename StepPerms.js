'use strict';


function stepPerms(n){
    let A = [0, 1, 2, 4];
    if (n > 3) {
        return stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
    } else {
        return A[n];
    }
}

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);

        cache[args] = result;

        return result;
    };
}

stepPerms = memoize(stepPerms);

console.log(stepPerms(7));
