function meetings(input) {

    let meeting = {}; // създадох обект който ще използвам като асоц. масив
    
    for (let line of input) { // итерирам по входните данни който са стринг ден и име
        let info = line.split(" "); // сплитвам ги по празен спейс
        let day = info[0]; // взимам деня
        let name = info[1]; // после името

        if (meeting.hasOwnProperty(day)) { // проверявам по условие дали обекта ми има деня вече
            console.log(`Conflict on ${day}!`); // ако го има срещата неможе да бъде направена и принтирам
        } else { 
            meeting[day] = name; // ако го няма то тогава го създавам в обекта (асоц.арей) ден - име
            console.log(`Scheduled for ${day}`); // и принтирам , че е букнат деня
        }
    }

    for (let el in meeting){ // обхождам обекта
        console.log(`${el} -> ${meeting[el]}`); // принтирам деня (el) т.е ключа , и после името (meeting[el] т.е value)
    }
}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);