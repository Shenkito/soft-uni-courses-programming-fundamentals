function palindromeIntegers(array) {
    
    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        let currentNumToString = currentNum.toString();
        let currentNumBackwards = "";

        for (let j = currentNumToString.length - 1; j >= 0; j--) {
            let currChar = currentNumToString[j];
            currentNumBackwards += currChar;
        }

        if (currentNumBackwards === currentNumToString) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);