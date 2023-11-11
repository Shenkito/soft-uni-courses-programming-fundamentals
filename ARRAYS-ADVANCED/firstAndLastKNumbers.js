function firstAndLastKNumbers(input) {

    let commandNum = input.shift();

    console.log(input.slice(0, commandNum).join(" "));
    console.log(input.slice(input.length - commandNum).join(" "));
    
}

firstAndLastKNumbers([2, 7, 8, 9]);
console.log("===================");
firstAndLastKNumbers([3, 6, 7, 8, 9])