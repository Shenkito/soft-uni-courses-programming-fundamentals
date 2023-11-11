function oddAndEvenSum(num) {

    let numToString = num.toString();

    let even = 0;
    let odd = 0;

    for (let i = 0; i < numToString.length; i++) {
        let current = Number(numToString[i]);

        if (current % 2 === 0) {
            even += current
        } else if (current % 2 !== 0) {
            odd += current;
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);