function specialNumbers(num) {

    for (let i = 1; i <= num; i++) { // фор за да завъртя от 1 до числото което ми е дадено
        let iToString = i.toString(); // тук текущото число го превръщам в стринг за да мога после да обходя всичките му числа по отделно
        let sum = 0 // променлива за сумиране на числата на текущото число

        for(let j = 0; j < iToString.length; j++) { // вложен фор цикъл който вече обхожда числото по отделни числа 
            let currDig = iToString[j]; // тук взимам текущото число от числото
            let currDigToNum = Number(currDig); // превръщам го в число за да мога да извършвам математически събирането
            sum += currDigToNum;
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11); // ако сумата на числата от числото са равни на някоя от тези стойности то тогава то е специално
        console.log(`${i} -> ${isSpecial ? `True` : `False`}`); // съкратен начин за ползване на IF/ELSE (condition ? `True` : `False`)
    }
}

specialNumbers(15);