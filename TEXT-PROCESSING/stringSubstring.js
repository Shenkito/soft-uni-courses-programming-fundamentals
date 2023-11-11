function stringSubstring(word, text) {

    let isFound = false; // създадох си контролна булева
    let wordToLowerCase = word.toLowerCase(); // за да го направя case insensitive
    let textToLowerCase = text.toLowerCase().split(" "); // -//-

    for (let el of textToLowerCase) { // итерирам по елементите 
        if (el === wordToLowerCase) { // ако елемента е същия като думата която търся
            isFound = true; // то тогава булевата ми минава true
            console.log(word); // принтирам думата
            return; // и прекратявам програмата
        }
    }
    
    if (!isFound) { // ако не съм я намерил и булевата ми не е true
        console.log(`${word} not found!`); // принтирам думата и казвам , че не съм я намерил
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');
console.log("====================================");
stringSubstring('python',
'JavaScript is the best programming language');