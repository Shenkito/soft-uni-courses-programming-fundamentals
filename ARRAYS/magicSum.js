function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let curr1 = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let curr2 = arr[j];
            let sum = curr1 + curr2;

            if (sum === num) {
                console.log(`${curr1} ${curr2}`);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6);


function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let curr1 = arr[i];
            
        let result = [];

        for (let j = i + 1; j < arr.length; j++) {
            let curr2 = arr[j];

            if (curr1 + curr2 === num) {
                result.push(curr1, curr2);
            } else {
                continue;
            }

            console.log(result.join(" "));
        }
    }
}