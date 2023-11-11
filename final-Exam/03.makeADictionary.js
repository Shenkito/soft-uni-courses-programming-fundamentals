function makeADictionary(input) {

    let line = input.shift().split(" | ");
    let result = new Map();

    for (let el of line) {
        let info = el.split(": ");
        let word = info[0];
        let description = info[1];
        
        if (result.has(word)) {
            result.get(word).push(description);
        } else {
            result.set(word, [description]);
        }
    }

    let command = input[input.length - 1];
    
    for (let words of input.slice(0, -1)) {

        let wordArr = words.split(" | ");
        
        for (let word of wordArr) {

            if (command === "Test") {
                
                if (result.has(word)) {
                    let print = word + ": ";
                    for (let description of result.get(word)) {
                        print += "\n " + `-${description}`;
                    }
                    console.log(print);
                }

            } else if (command === "Hand Over") {
                let keys = Array.from(result.keys());
                console.log(keys.join(" "));
                break;
                return;
            } 
        }
    }
}

makeADictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"]);

console.log("====================");

makeADictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"]);