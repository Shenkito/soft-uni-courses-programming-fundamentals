function decrypt(input) {
    let pattern = /^([$%])(?<name>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/gm;
    let countInputs = Number(input.shift());

    for (let i = 0; i < countInputs; i++) {
        let line = input[i];
        let match = pattern.exec(line);

        if (match) {
            let name = match.groups.name;
            let numOne = Number(match.groups.num1);
            let numTwo = Number(match.groups.num2);
            let numThree = Number(match.groups.num3);
            let decMessage = String.fromCharCode(numOne, numTwo, numThree);
            console.log(`${name}: ${decMessage}`);
        }

        if(!match) {
            console.log("Valid message not found!");
        }
    }
}

decrypt((["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])
);

console.log("=========");

decrypt(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])
