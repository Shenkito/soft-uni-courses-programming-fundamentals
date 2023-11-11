function divison(num) {

    let div = [10, 7, 6, 3, 2];

    for (let i = 0; i <= 5; i++) {
        let numGiven = div.shift();

        if (num % numGiven === 0) {
            console.log(`The number is divisible by ${numGiven}`);
            break;
        } else if (i === 5) {
            console.log("Not divisible");
        }
    }
}

divison(30);

function div(num) {
    if (num % 10 === 0) {
        console.log(`The number is divisible by 10`);
    } else if (num % 7 === 0) {
        console.log(`The number is divisible by 7`);
    } else if (num % 6 === 0) {
        console.log(`The number is divisble by 6`);
    } else if (num % 3 === 0) {
        console.log(`The number is divisible by 3`);
    } else if (num % 2 === 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }
}

div();