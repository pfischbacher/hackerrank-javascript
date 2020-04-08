function checkMagazine(magazine, note) {
    const words = {};
    for (let word of magazine) {
        words[word] = words[word] > 0 ? words[word] + 1 : 1;
    }

    for (let word of note) {
        if (words[word] > 0) {
            words[word]--;
        }
        else {
            console.log('No');
            return;
        }
    }

    console.log('Yes');
}
