function reverseArrayOfNums(n, inputArray) {
    let newArray = [];

    for (let index = 1; index <= n; index++) {
        let curr = inputArray[index - 1];
        newArray.push(curr);
    }

    newArray.reverse();
    console.log(newArray.join(" "));

}

reverseArrayOfNums(3, [10, 20, 30, 40, 50]);