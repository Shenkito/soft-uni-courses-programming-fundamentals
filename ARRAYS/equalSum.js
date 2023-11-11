function equalSum (array) {

    for (let i = 0; i < array.length; i++) {
        
        let leftSum = 0;
        let rigthSum = 0;

        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }

        for (let k = i + 1; k < array.length; k++) {
            rigthSum += array[k];
        }

        if (leftSum === rigthSum) {
            console.log(i);
            return;
        }
    }

    console.log("no");
}

equalSum([1, 2, 3, 3]);
console.log("=============");
equalSum([1, 2]);
console.log("=============");
equalSum([1]);