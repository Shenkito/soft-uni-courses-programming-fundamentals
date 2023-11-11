function race(input) {

    let participants = input.shift().split(", "); // звимам си състезателите
    let result = {}; // създавам празен обект в който по късно ще ги добавям
    
    for (let participant of participants) {
        result[participant] = 0; // тук ги добавям съзтезате >= 0 точки начална стойност
    }
    
    let regex = /[a-zA-Z]+|\d+/g;

    for (let command of input) { // итерирам по командите от входните данни

        if (command === 'end of race') { // ако командата е тази , break`вам
            break;
        }

        let match = command.match(regex).join(""); // проверявам регекса дали мачва командата и я обръщам в стринг с join`a
        let points = 0; // нова променлива с стойност 0
        let currName = ""; // тук ще добавям името за да мога да проверя после дали имам такъв състезател в обекта

        for (let i = 0; i < match.length; i++) { // итерирам по мача с регекса 
             
            let currChar = match[i]; // взимам каръктъра 
            
            if (currChar.charCodeAt(0) >= 48 && currChar.charCodeAt(0) <= 57) { // проверявам дали той е число 
                points += Number(currChar); // ако е число го добавям към точките 
            } else {
                currName += currChar; // ако е ?буква я добавям към името 
            }
        }

        if (result.hasOwnProperty(currName)) { // проверявам дали обекта ми има такова име
            result[currName] += points; // ако има добавям точките към първоначалната стойност 0
        }
    }

    let sorted = Object.entries(result).sort((a,b) => b[1] - a[1]); // връща ми масив с нестнати масиви състезател => точки сортирани по условие 

    console.log(`1st place: ${sorted[0][0]}`); // принтирам само името затова на вторите скоби е 0
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
    
    
    
    
    // може и така...... xD
    // let place = 1;

    // for (let el of sorted) {

    //     switch (place) {
    //         case 1:
    //             console.log(`1st place: ${el[0]}`);
    //         break;
    //         case 2:
    //             console.log(`2nd place: ${el[0]}`);
    //         break;
    //         case 3:
    //             console.log(`3rd place: ${el[0]}`);
    //         break;
    //         default:
    //     }

    //     if (place >= 3) {
    //         break;
    //     }

    //     place++;
    // }
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);