function smallestTwoNumbers(input) {

    let newArr = input.sort((a, b) => a - b);

    let arrSliced = newArr.slice(0, 2);
    console.log(arrSliced.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
console.log("=====================");
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);