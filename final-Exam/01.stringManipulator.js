function stringManipulator(input) {

    let message = input.shift();
    
    for (let line of input) {
        
        let data = line.split(" ");
        let command = data.shift();

        if (command === "End") {
            break;
            return
        }

        switch (command) {

            case "Translate": {
                let char = data[0];
                let replacement = data[1];
                while (message.includes(char)) {
                    message = message.replace(char, replacement);
                }
                console.log(message);
                break;
            }
            case "Includes": {
                let substring = data[0];
                let isIncluding = message.includes(substring);
                if(isIncluding) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            }
            case "Start": {
                let substring = data[0];
                let isStarting = message.startsWith(substring);
                if (isStarting) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            }
            case "Lowercase": {
                let toLowerCase = message.toLowerCase();
                console.log(toLowerCase);
                break;
            }
            case "FindIndex": {
                let char = data[0];
                let lastIndex = message.toLowerCase().lastIndexOf(char.toLowerCase());
                console.log(lastIndex);
                break;
            }
            case "Remove": {
                let startIndex = Number(data[0]);
                let count = Number(data[1]);
                let result = message.substring(0, startIndex) + message.substring(startIndex + count);
                console.log(result.toLowerCase());
                break;
            }
        }
    }
}


stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"]);

console.log("=========================");

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"]);