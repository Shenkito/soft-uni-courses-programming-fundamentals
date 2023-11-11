function addressBook(input) {

    let book = {}; // създавам празен обект който в последствие ще се ползва като асоц. арей

    for (let line of input) { // обхождам входните данни
        let current = line.split(":"); // сплитвам ги по ":" което ще ми върне масив от два елемента име и улица
        let name = current[0]; // взимам името
        let street = current[1]; // взимам улицата

        book[name] = street; // пъхам ги в обекта име => улица
    }

    let sorted = Object.keys(book).sort((a, b)=> a.localeCompare(b)); // по условие трябва да сортирам по азбучен ред като взимам objectKeys`а на book`а което ще направи сравнението по имената 

    for (let key of sorted) { // сорта ми връща арей от имената сортирани като по този арей итерирам
        console.log(`${key} -> ${book[key]}`); // принтирам името т.е key и принтирам улицата т.е book[key] което е value
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);