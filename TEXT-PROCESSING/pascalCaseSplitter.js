function pascalCaseSplitter(input) {

    let result = []; // създавам си празен масив
    let startingIndex = 0; // 

    for (let i = 1; i < input.length; i++) { // итерирам по стринга
        
        let currChar = input[i]; // взимам текущия символ т.е буква

        if (currChar.charCodeAt(0) >= 65 && currChar.charCodeAt(0) <= 90) { // проверявам дали е главна буква , като стигна до следваща главна буква вече съм взел цяла дума
            result.push(input.substring(startingIndex, i)); // която пъхам в масива , като изрязвам до следваща главна буква
            startingIndex = i; // и тук за да продължа с следващата дума от точното място startingIndex`a ми приема стойноста на i
        }
    }
    
    result.push(input.substring(startingIndex)); // и тук пущвам последния останал елемент

    console.log(result.join(", "));
}

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// console.log("===========================================");
pascalCaseSplitter('HoldTheDoor');
// console.log("===========================================");
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');