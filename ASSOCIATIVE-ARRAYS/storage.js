function storage(input) {

    let store = { // създадох празен обект който е с цел да е assoc. array

    };

    for (let line of input) { // обхождам входните данни
        let curr = line.split(" "); // сплитвам ги по спейс което връща масив с два елемента продукт и количество
        let item = curr[0]; // взимам продукта
        let quantity = Number(curr[1]); // взимам количеството

        if (store.hasOwnProperty(item)) { // проверявам ако в обекта имам продукта
            store[item] += quantity; // към текущото количесто добавям новото
        } else if (!store.hasOwnProperty(item)) { // ако обаче го нямам , то тогава
            store[item] = quantity; // създавам нов продукт с количество в обекта
        }
    }

    for (let key in store) { // обхождам ассоц арея т.е обекта
        console.log(`${key} -> ${store[key]}`); // и принтирам продукта т.е key и неговата стойност т.е value
    }
}

// storage(['tomatoes 10',
// 'coffee 5',
// 'olives 100',
// 'coffee 40']);

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);