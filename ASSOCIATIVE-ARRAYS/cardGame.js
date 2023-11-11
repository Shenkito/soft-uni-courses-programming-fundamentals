function cardGame(input) {

    let cardPwrNum = { // създавам обект с power на картите който ще приемам по входни данни
        "2": 2, // картата 2 е с power 2
        "3": 3, // ==========
        "4": 4, // ==========
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    let cardTypeNum = { // още един обект power на type 
        "S": 4, // S е с power 4
        "H": 3, // ==========
        "D": 2,
        "C": 1,
    }

    let players = new Map(); // създавам нов Мап с играчите

    for (let line of input) { // итерирам по входните данни
        
        let [playerName, cards] = line.split(": "); // деструктурирам си директно име на игач , и карти като сплитвам по ":"
        
        if (!players.has(playerName)) { // ако в мапа го няма играча
            players.set(playerName, new Set()); // то тогава сетвам играча и пъхам нов сет
        }

        let currCards = cards.split(", "); // тук обработвам картите 

        for (let card of currCards) { // итерирам по тях
            players.get(playerName).add(card); // тук гета ми връжа пъхнатия нов сет и към него добавям картата
        }
    }

    for (let playerInfo of Array.from(players)) { // туй итерирам по всеки играч като arrayFrom ще ми върне арей с името на играча и картите
        
        let sumCards = 0; // по условие трябва да намирам сбора на картита

        for (let currCard of Array.from(playerInfo[1])) { // итерирам по картите който в арея стоят на индекс 1
            let cardInfo = currCard.split(""); // самата карта я сплитвам на няколко парчета защото по условие (виж целия код>)
            let powerStr = cardInfo.splice(0, cardInfo.length - 1).join(""); // тук взимам power с сплайс което би трябвало да вземе първия знак (парче) от картата
            let typeStr = cardInfo[cardInfo.length - 1]; // тук взимам последния знак (парче) който е type
            let power = cardPwrNum[powerStr]; // и тук свързвам към създадения обект за power като подавам powerStr
            let type = cardTypeNum[typeStr]; // тук същото само , че за type
            
            sumCards += power * type; // и намирам сумата
        }

        console.log(playerInfo[0] + ": " + sumCards); // и тук принтирам името на играча и неговите точки
    }
}

cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']);