function sortNumbers(num1, num2, num3) {
    let array = [];
    array.push(num1, num2, num3);
    array.sort();
    
    for (let i = array.length - 1; i >= 0; i--) {
        let newArray = array[i];
        console.log(newArray);
    }
}

sortNumbers(2, 1, 3);