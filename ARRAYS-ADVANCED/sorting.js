function sorting(arr) {

    let sorted = arr.sort((a, b) => a - b)
    let result = [];

    while (arr.length > 0) {
        result.push(arr.pop());
        result.push(arr.shift());
    }

    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log("================================");
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);