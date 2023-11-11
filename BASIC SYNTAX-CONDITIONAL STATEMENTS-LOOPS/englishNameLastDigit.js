function lastDigit(num) {
    let numString = num.toString();
    let currentDig = "";

    for (let i = 0; i <= numString.length - 1; i++) {
        let currentNum = Number(numString[i]);
        currentDig += currentNum;
    }

    let lstDig = Number(currentDig);
    let lsDig = lstDig % 10;

    if (lsDig === 1) {
        console.log("one");
    } else if (lsDig === 2) {
        console.log("two");
    } else if (lsDig === 3) {
        console.log("three"); 
    } else if (lsDig === 4) {
        console.log("four"); 
    } else if (lsDig === 5) {
        console.log("five"); 
    } else if (lsDig === 6) {
        console.log("six"); 
    } else if (lsDig === 7) {
        console.log("seven"); 
    } else if (lsDig === 8) {
        console.log("eight"); 
    } else if (lsDig === 9) {
        console.log("nine");
    } else if (lsDig === 0) {
        console.log("zero");
    }
}

lastDigit(1987)