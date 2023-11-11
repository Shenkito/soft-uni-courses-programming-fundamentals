function storeProvision(originArr, deliveryArr) {
    
    let myItems = { // тук създавам обект празен

    }
    
    for (let i = 0; i < originArr.length; i += 2) { // тук итерирам по първия арей като ако дебъгна ще разбера защо += 2 по условие
        let item = originArr[i]; // тук взимам предмета
        let quantity = originArr[i + 1]; // тук взимам количеството
        myItems[item] = Number(quantity) // и тук ги добавям в обекта
    }

    for (let j = 0; j < deliveryArr.length; j += 2) { // тук итерирам по втория арей //-//-//
        let deliveryItem = deliveryArr[j]; // взимам другия предмет
        let deliveryQuantity = deliveryArr[j + 1]; // взимам другото количество

        if (myItems.hasOwnProperty(deliveryItem)) { // тук проверявам ако обекта ми има този предмет
            myItems[deliveryItem] += Number(deliveryQuantity); // добави към неговата стойност , текущата такава
        } else {
            myItems[deliveryItem] = Number(deliveryQuantity); // ако не , то тогава добави предмета в обекта

        }
    }

    for (let key of Object.keys(myItems)) { // тук трябва да мина по целия обект 
        console.log(`${key} -> ${myItems[key]}`); // и принтирам неговия ключ пропърти / и неговата стойност.
    }
}

storeProvision(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);