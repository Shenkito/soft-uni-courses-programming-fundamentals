function bombNumbers(sequenceOfNums, specialBombNumAndPower) {

    let specialBombNum = specialBombNumAndPower.shift();
    let itsPower = specialBombNumAndPower.shift();

    for (let i = 0; i < sequenceOfNums.length; i++) {
        
        let currentNum = sequenceOfNums[i];
        
        if (currentNum === specialBombNum) {

            let indexOfBombNum = i;

            let startingIndex = indexOfBombNum - itsPower;
            let detonationIndex = itsPower + itsPower + 1;

            while (startingIndex < 0) {
                startingIndex++;
                detonationIndex--;
            }

            sequenceOfNums.splice(startingIndex, detonationIndex);

            i--;

        }
    }

    let sum = 0;
    let sequenceOfNumsLength = sequenceOfNums.length;

    for (let j = 0; j < sequenceOfNumsLength; j++) {
        let curr = sequenceOfNums[j];
        sum += curr;
    }

    console.log(sum);
}

bombNumbers(
[1, 2, 2, 4, 2, 2, 2, 9],
[4, 2]
);

console.log("==============");
bombNumbers(
[1, 4, 4, 2, 8, 9, 1],
[9, 3]
);

console.log("==============");
bombNumbers(
[1, 7, 7, 1, 2, 3],
[7, 1]
);

console.log("==============");
bombNumbers(
[1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1]
);
