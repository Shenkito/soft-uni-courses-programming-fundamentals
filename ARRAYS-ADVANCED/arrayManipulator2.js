function arrayManipulator2(arrOfNums, arrCommands) {

    for (let i = 0; i < arrCommands.length; i++) {

        let command = arrCommands[i].split(" ");
        let currCommand = command[0];
        let indexOf = Number(command[1]);
        let element = Number(command[2]);

        switch (currCommand) {

            case "add":
                arrOfNums.splice(indexOf, 0, element);
            break;
            case "addMany":
                for (let j = command.length - 1; j >= 2; j--) {
                    let elementToAdd = Number(command[j]);
                    arrOfNums.splice(indexOf, 0, elementToAdd);
                }
            break;
            case "contains":
                let firstContains = arrOfNums.indexOf(indexOf);
                console.log(firstContains);
            break;
            case "remove":
                arrOfNums.splice(indexOf, 1);
            break;
            case "shift":
                for (let k = 0; k < indexOf; k++) {
                    let elementToShift = arrOfNums.shift();
                    arrOfNums.push(elementToShift);
                }
            break;
            case "sumPairs":
                for (let l = 0; l < arrOfNums.length; l++) {
                    let a = Number(arrOfNums.splice(l, 1));
                    let b = Number(arrOfNums.splice(l, 1));

                    let sum = a + b;
                    // arrOfNums.unshift(sum);
                    // sum = 0;
                }
                // arrOfNums.reverse();
            break;
            case "print":
                let result = arrOfNums.join(", ");
                console.log(`[ ${result} ]`);
            break;
        }
    }
}

arrayManipulator2(
[1, 2, 4, 5, 6, 7],
['add 1 8', 'contains 1', 'contains 3', 'print']);

console.log("======================================");

// arrayManipulator2(
// [1, 2, 3, 4, 5],
// ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);