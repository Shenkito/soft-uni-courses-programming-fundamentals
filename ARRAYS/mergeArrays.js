function mergeArrays(arr1, arr2) {

    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        let current1 = arr1[i];
        let current2 = arr2[i];

        if (i % 2 === 0) {
            current1ToNum = Number(current1);
            current2ToNum = Number(current2);
            arr3.push(current1ToNum + current2ToNum);
        } else {
            arr3.push(current1 + current2);
        }
    }

    console.log(arr3.join(" - "));
}

mergeArrays(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);

mergeArrays(
['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);