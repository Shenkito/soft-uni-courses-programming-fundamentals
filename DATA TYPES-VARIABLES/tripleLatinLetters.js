function triplesOfLatinLetters(numStrig) {

    for (let i = 1; i <= numStrig; i++) {

        for (let y = 1; y <= numStrig; y++) {

            for (j = 1; j <= numStrig; j++) {
                let letter1 = String.fromCharCode(96 + i);
                let letter2 = String.fromCharCode(96 + y);
                let letter3 = String.fromCharCode(96 + j);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

triplesOfLatinLetters(`2`);


// тук номера в ASCI на малко "а" е 97 , като предното по ред в таблицата което е 96 събирам с текущата стойност на i , y или j , тъй като винаги започва от 1 то става 97 и това е буквата "а"