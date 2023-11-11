function processOddNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        // let currPostition = arr.indexOf(currentNum);
        
        if (i % 2 === 1) {
            
            result.push(currentNum * 2);
        }
    }

    console.log(result.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25]);
console.log("=======================");
processOddNumbers([3, 0, 10, 4, 7, 3]);