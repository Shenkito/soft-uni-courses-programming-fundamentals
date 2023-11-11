function maxNum(array) {
    let result = [];
    let isBigger = false;
    let lastElement = array[array.length - 1];

    for (let i = 0; i < array.length; i++) {
        let current1 = array[i];

        if (current1 === lastElement) {
            isBigger = true;
        }

        for (let j = i + 1; j < array.length; j++) {
            let current2 = array[j];

            if (current1 > current2) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }

        }
        
        if (isBigger === true) {
            result.push(current1);
        }
    }
    
    console.log(result.join(" "));
}

maxNum([41, 41, 34, 20]);