function sumEvenNumbers(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let toNum = Number(currentNum);

        if (toNum % 2 === 0) {
            sum += toNum;
        }
        
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);