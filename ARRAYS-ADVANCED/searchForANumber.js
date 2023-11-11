function searchForANumber(arr1, arr2) {

    let array = arr1;
    
    let elementsToTake = arr2[0];
    let elementsToDelete = arr2[1];
    let numToSearchFor = arr2[2];

    let newArr = array.slice(0, elementsToTake);
    // console.log(newArr);
    
    let arrDeleted = newArr.splice(elementsToDelete);
    let countOccurs = 0;

    // console.log(arrDeleted);

    for (let i = 0; i < arrDeleted.length; i++) {
        
        let currNum = arrDeleted[i];

        if (currNum === numToSearchFor) {
            countOccurs++;
        }
    }

    console.log(`Number ${numToSearchFor} occurs ${countOccurs} times.`);

}

searchForANumber(
[5, 2, 3, 4, 1, 6],
[5, 2, 3]);
console.log("------------");
searchForANumber(
[7, 1, 5, 8, 2, 7],
[3, 1, 5])