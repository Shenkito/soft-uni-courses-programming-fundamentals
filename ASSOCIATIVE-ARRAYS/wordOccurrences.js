function wordOccurrences(input) {

    let count = {};

    for (let curr of input) {
        let word = curr.split(" ");

        if (!count.hasOwnProperty(word)) {
            count[word] = 1;
        } else if (count.hasOwnProperty(word)) {
            count[word] += 1;
        }
    }

    let sortedCount = Object.entries(count).sort((a,b)=> b[1] - a[1]);

    for (let el of sortedCount) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);