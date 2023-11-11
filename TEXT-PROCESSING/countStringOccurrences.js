function countStringOccurrences(text, word) {

    let count = 0;
    let txt = text.split(" ");

    for (let currWord of txt) {
        if(currWord === word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence',
'is');