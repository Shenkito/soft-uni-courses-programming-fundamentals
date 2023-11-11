function wordsTracker(input) {

    let wordsToFind = input.shift().split(" "); // взиам си двете думи от входните данни който трябва да търся

    let objWords = {}; // създавам празен обект

    for (let i = 0; i < wordsToFind.length; i++) { // итерирам по двете думи
        objWords[wordsToFind[i]] = 0 // и ги добавям в обекта с начална стойност 0;
    }

    for (let curr of input) { // итерирам по останалите думи от входните данни
        
        let currWord = curr // взимам текущата дума

        if (currWord in objWords) { // // проверявам ако текушата дума я има в обекта
            objWords[curr] ++; // увеличавам стойноста +1
        }
    }

    let sorted = Object.entries(objWords).sort((a,b) => b[1] - a[1]); // тук сортирам value`s в обекта тоест стойностите от голямо към по-малко което ще ми върне масив с два масива с по два елемента ключ и стойност
    
    for (let el of sorted) { // тук итерирам по масива
        console.log(`${el[0]} - ${el[1]}`); // и принтирам ключа и неговата стойност
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );