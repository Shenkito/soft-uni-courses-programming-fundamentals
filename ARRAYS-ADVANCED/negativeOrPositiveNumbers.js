function negativeOrPositiveNums(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let currNum = Number(array[i]);

        if (currNum < 0) {
            newArr.unshift(currNum);
        } else {
            newArr.push(currNum);
        }
    }

    console.log(newArr.join(" \n "));
}

negativeOrPositiveNums(['7', '-2', '8', '9']);
console.log("================================");
negativeOrPositiveNums(['3', '-2', '0', '-1']);