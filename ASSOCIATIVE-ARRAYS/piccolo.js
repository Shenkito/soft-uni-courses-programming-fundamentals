function piccolo(input) {

    let parking = new Set(); // създадох сет тъй като по условие трябва да ползвам само ключ , а сет предоставя ключ с държащо се value

    for (let info of input) { // итерирам по входните данни
        let [command, number] = info.split(", "); // деструктурирам си по запетая команда и рег.номер
        
        if (command === "IN") { // ако командата е ИН
            parking.add(number); // към сета добавям рег номер на колата
        } else { // ако е аут или друга примерно за това е елсе
            parking.delete(number); // премахвам рег номер на колата от паркинга
        }
    }

    let parkingArrSorted = Array.from(parking).sort((a, b)=> a.localeCompare(b)); // тук ми създава арей от сета , за да мога да сортирам както се иска по условие
    let parkingSetSorted = new Set(parkingArrSorted); // след това придобивам в нов set арейя от горе с промените

    for (let car of parkingSetSorted) { // и тук итерирам по сета
        console.log(car); // като взимам всеки рег номер който е останал вътре и го принтирам
    }

    if (parkingArrSorted.length === 0) { // тук проверявам дължината на арея който след това обръщам в сет който приема неговата информация , затова ако length`a е 0 , принтирам , че паркинга е празен
        console.log("Parking Lot is Empty");
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
console.log("==================");
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])