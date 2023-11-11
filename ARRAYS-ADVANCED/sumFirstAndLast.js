function sumFirstAndLastNum(array) {

    let firstNum = Number(array[0]);
    let lastNum = Number(array[array.length - 1]);

    let sumResult = firstNum + lastNum;
    console.log(sumResult);
}

sumFirstAndLastNum(['20', '30', '40']);
console.log("=========");
sumFirstAndLastNum(['5', '10']);

function test(array) {
    
    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());

    let sum = firstNum + lastNum;
    console.log(sum);
}

test(['20', '30', '40']);
