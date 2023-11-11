function nums(input) {

    let arrNumbers = input.shift().split(" ").map(Number);
    let isFinish = false;

    for (let i = 0; i < input.length; i++) {
        
        let commands = input.shift().split(" ");
        let command = commands[0];
        let action = Number(commands[1]);
        let otherAction = Number(commands[2]);

        switch (command) {

            case "Add":
                arrNumbers.push(action);
            break;
            case "Remove":
                if (arrNumbers.includes(action)) {
                    let firstContains = arrNumbers.indexOf(action);
                    arrNumbers.splice(firstContains, 1)
                }
            break;
            case "Replace":
                if (arrNumbers.includes(action)) {
                    let anotherContains = arrNumbers.indexOf(action);
                    arrNumbers.splice(anotherContains, 1, otherAction);
                }
            break;
            case "Collapse":
                let filtered = arrNumbers.filter(number => number > action);
                arrNumbers = filtered;
            break;
        }
    
    }
    console.log(arrNumbers.join(" "));
}

nums(
["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"]);

nums(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])

nums(["1 20 -1 10",
"Collapse 8",
"Finish"]);
