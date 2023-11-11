function charactersInRange(char1, char2) {
    let char1Num = char1.charCodeAt(0);
    let char2Num = char2.charCodeAt(0);

    let startIndx = char1Num > char2Num ? char2Num : char1Num;
    let endIndx = char1Num > char2Num ? char1Num : char2Num;

    let result = "";

    for (let i = startIndx + 1; i < endIndx; i++) {

        let current = String.fromCharCode(i);

        result += current + " ";
    }

    console.log(result);
}

charactersInRange('C','#');
charactersInRange('a','d');
charactersInRange('#',':');