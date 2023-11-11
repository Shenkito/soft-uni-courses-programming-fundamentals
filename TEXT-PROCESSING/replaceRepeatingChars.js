function replaceRepeatingChars(input) {
    
    let result = "";

    for (let i = 0; i < input.length; i++) { // итерирам по инпута който е стринг от букви
        
        let currChar = input[i]; // взимам първата буква
        let nextChar = input[i + 1]; // и следващата след нея

        if (currChar === nextChar) { // ако те са еднакви 
            continue; // продължавам т.е нищо не правя
        } else {
            result += currChar; // ако са различни добавям първата , така от всяка поредица по условие ще взема само първата буква
        }
    }

    console.log(result); // и принтирам резултата
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log("=================");
replaceRepeatingChars('qqqwerqwecccwd');