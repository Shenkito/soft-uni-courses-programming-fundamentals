function lastKNumbersSequence(n, k) {
    // [n, k] = [n, k].map(Number);
    
    let arr = [1];
    
    for (let i = 1; i < n; i++) {
        let startIndx = Math.max(0, i - k);

        let currElement = arr.slice(startIndx, startIndx + k).reduce((a, b) => (a + b) , 0);
        arr.push(currElement);
    }
    console.log(arr.join(" "));
}

lastKNumbersSequence(6, 3);






























// function lastKNumbers(n, k) {

//     let result = [1];

//     for(let i = 1; i < n; i++){

//         result[i] = sumLastK(result, k);

//     }

//     function sumLastK(array = result, k) {

//         k = array.length > k ? k : array.length;

//         let sum = 0;

//         for(let i = 1; i <= k; i++){

//             sum += array[array.length - i];

//         }

//         return sum;

//     }

//     console.log(`[${result.join(', ')}]`);

// }

// lastKNumbers(6, 3);



// function lastKNumbersSequence(n, k) {
//     [n, k] = [n, k].map(Number);

//     let result = [1];

//     for(let i=1; i<n; i++) {
//         let startIndex = Math.max(0, i-k);
//         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
//         result.push(currentElement);
//     }

//     console.log(result.join(" "));
// }

// lastKNumbersSequence(6, 3);