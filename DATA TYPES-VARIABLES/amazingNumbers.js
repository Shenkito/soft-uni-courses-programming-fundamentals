function amazingNumbers(num) {
    let numToString = num.toString(); // тук обръщам числото в стринг за да мога да взимам всяко едно от него по отделно
    let sum = 0; // променлива в която всяко отделно взето число събирам за да получа общата сума

    for (let i = 0; i <= numToString.length - 1; i++) { // ползвам фор цикъл за да обходя всяко число от числото по отделно
        let currentNum = Number(numToString[i]); // тук обърщам пак в число за да мога да извършвам математически събирането
        sum += currentNum;
    }

    let result = sum.toString(); // създавам променлива в която общата сума превръщам от число в стринг 

    if (result.includes(9)) { // за да мога да разбера дали резултата съдържа цифрата 9 като ползвам .includes
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(999);