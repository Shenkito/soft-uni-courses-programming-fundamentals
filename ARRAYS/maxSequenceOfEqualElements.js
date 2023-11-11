function max(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        
        let currentNum = array[i];
        let currentSeq = [currentNum];

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];

            if (currentNum === nextNum) {
                currentSeq.push(nextNum);
            } else {
                break;
            }
        }

        if (currentSeq.length > result.length) {
            result = currentSeq;
        }
    }

    console.log(result.join(" "));
}

max([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);