function condenseArrayToNumbers(array) {
    let currArray = array;

    while (currArray.length > 1) {
        let newArray = [];
        
        for (let i = 0; i < currArray.length - 1; i++) {
            let firstElement = currArray[i];
            let secondElement = currArray[i + 1];

            newArray.push(firstElement + secondElement);
        
        }

        currArray = newArray;
    }

    console.log(currArray[0]);

    
}

condenseArrayToNumbers([2,10,3]);