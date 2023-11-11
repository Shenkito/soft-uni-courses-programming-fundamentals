function partyTime(input) {

    let vipGuests = []; // създавам празен масив за вип гостите
    let regularGuests = []; // създавам празен масив за рег гостите

    while (input[0] !== "PARTY") { // докато е различно от ПАРТИ
        let currentGuest = input.shift(); // взимам елемент от входните данни
        // let chCode = currentGuest.charCodeAt([0]);

        if (currentGuest.charCodeAt(0) >= 48 && currentGuest.charCodeAt(0) <= 57) { // така проверявам дали започва с цифра диджит
            vipGuests.push(currentGuest); // ако да то тогава е вип
        } else {
            regularGuests.push(currentGuest); // ако не тогава е рег
        }
    }

    for (let guest of regularGuests) { // тук итерирам по рег списъка
        vipGuests.push(guest); // и пушвам в випа
    }

    let commandDelete = input.shift(); // изтривам ПАРТИ командата

    for (let el of input) { // итерирам по остаалите входни данни който след ПАРТИ са гостите който идват тоест до сега обработвах списъка с гостите (резервации ако щеш)
        if (vipGuests.indexOf(el) >= 0) { // ?????????
            vipGuests.splice(vipGuests.indexOf(el), 1) // ????????
        }
    }

    console.log(vipGuests.length); // тъй като съм ги смесил всичките в вип тук взимам ленгта на всички 

    for (let guest of vipGuests) {
        console.log(guest); // и после принтирам тези който немогат да присъстват като ако има ВИП те трябва да се принтират 1ви
    }
}


partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);