function listOfProducts(array) {
    
    let arraySorted = array.sort();
    
    for (let i = 0; i < arraySorted.length; i++) {

        console.log((`${i + 1}.${arraySorted[i]}`));
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log("===============================================");
listOfProducts(['Watermelon', 'Banana', 'Apples']);