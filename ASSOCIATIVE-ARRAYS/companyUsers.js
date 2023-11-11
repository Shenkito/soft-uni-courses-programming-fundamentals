function companyUsers(input) {

    let companies = new Map(); // създадох нов мап

    for (let line of input) { // итерирам по входните данни
        
        let data = line.split(" -> "); // тук ги разделям по стрелка
        let companyName = data[0]; // взимам името на компанията
        let employeeId = data[1]; // взимам и номера на работника

        if(!companies.has(companyName)) { // проверявам дали в мапа ми има такава компания
            companies.set(companyName, new Set()); // ако няма задавам такава в мапа , и добавям нов сет който ще ми държи работниците
        }
        
        companies.get(companyName).add(employeeId); // тук гета ми връщша сета и към него добавям номера на работника
    }

    let sorted = Array.from(companies).sort((a, b) => a[0].localeCompare(b[0])); // по условие ми искат да сортирам възходящ ред по азбука като арейФром ми връща арей от companies с елементите като отделни ареи

    for (let el of sorted) { // итерирам по вече сортирания арей
        let comName = el[0]; // взимам компанията
        let employeeId = [...el[1]]; // тук ми връша арей с номерата на работниците , правя го по този начин ако случайно имам повече от един номер
        console.log(comName); // принтирам името на компанията

        for (let empl of employeeId) { // итерирам по номерата на работниците
            console.log(`-- ${empl}`); // и ги принтирам
        }
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);