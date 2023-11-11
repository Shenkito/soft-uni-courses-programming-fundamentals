function phoneBook(input) {

    let phBook = { // създавам обект , който в случая ще използвам като асоц. арей
        
    }

    for (let el of input) { // итерирам с фор оф инпута
        
        let info = el.split(" "); // тук ми връща арей сплитнат по празно място с името и телефона 
        let name = info[0]; // тук си взимам името
        let phoneNum = info[1]; // тук си взимам телефона

        phBook[name] = phoneNum; // тук добавям в обекта името което ще има value телефонния номер
    }

    for (let key in phBook) { // итерирам по обекта с фор ин
        console.log(`${key} -> ${phBook[key]}`); // и логвам ключа тоест името , и value тоест телефонния номер.
    }


}

phoneBook([
 'Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344'
]);