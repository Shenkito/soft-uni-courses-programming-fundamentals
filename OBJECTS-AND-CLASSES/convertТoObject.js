function convertToObject(jsonString) {
    
    let person = JSON.parse(jsonString); // тук конвертирам входните данни който са стринг в json формат към Object

    for (let key of Object.keys(person)) { // Обхождам елементите който са ключ/пропърти | стойност
        
        let prop = key; // взимам ключа/пропъртите в отделна променлива
        let value = person[key]; // и взимам value стойноста , КВАДРАТНИТЕ СКОБИ СА МНОГО ВАЖНИ !!!
        
        console.log(`${prop}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');