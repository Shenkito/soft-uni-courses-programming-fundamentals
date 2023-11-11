function distinctArray(input) {

    let resultArray = [];
    let hasElement = false;

    for (let i = 0; i < input.length; i++) {
        
        let currElement = input[i];

        if (resultArray.includes(currElement)) {
            hasElement = true;

        } else {
            resultArray.push(currElement);
        }
    }

    console.log(resultArray.join(" "));
}

// distinctArray([1, 2, 3, 4]);
console.log("==============");
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log("==============");
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);