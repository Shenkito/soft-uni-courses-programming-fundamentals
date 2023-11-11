function arrayRotation(array, rotCount) {

    let newArray = [];

    for (let i = 0; i < rotCount; i++) {
        let current = array[0];

        for (let j = 1; j < array.length; j++) {
            newArray.push(array[j])
        }

        newArray.push(current);
        array = newArray;
        newArray = [];
    }

    console.log(array.join(" "))
}

function arrayRotation2(array, rotCount) {
    for (let i = 0; i < rotCount; i++) {
        array.push(array.shift());
    }
}

arrayRotation([51, 47, 32, 61, 21], 2);
console.log("=========================");
arrayRotation([32, 21, 61, 1], 4);
console.log("=========================");
arrayRotation([2, 4, 15, 31], 5);
console.log("=========================");
arrayRotation([2, 4, 15, 31], 5);
