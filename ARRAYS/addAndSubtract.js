function addAndSubtract(array) {
    
    let newArray = [];
    let originalArraySum = 0;
    let modifiedArraySum =0;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        originalArraySum += current;

        if (current % 2 === 0) {
            current += i;
        } else {
            current -= i;
        }

        modifiedArraySum += current;

        newArray.push(current);

    }

    console.log(newArray);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);