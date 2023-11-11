function sumFirstAndLastArrays(input) {
    let first = input[0];
    let last = input[input.length - 1]; // Взимам последния елемент от масива.
    console.log(first + last);
}

sumFirstAndLastArrays([20, 30, 40]);