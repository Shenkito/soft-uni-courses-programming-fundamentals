function oddOccurrences(input) {
    
    let arr = input.toLowerCase().split(" "); // сплитвам входните данни по празно място което с lowerCase защото по условие трябва да е case insensitive това ми връша масив от елементите 

    
    let mapObj = new Map(); // създавам празен мап

    for (let i = 0; i < arr.length; i++) { // итерирам по арейя
        mapObj.set(arr[i], 0); // и тук добавям в мапа кеy който е думата а ,0 е стойноста 
    }

    for (let word of arr) { // итерирам по арейя
        if (mapObj.has(word)) { // проверявам дали в мапа ми има текушата дума от итерацията , ако я има 
            let value = mapObj.get(word); // създавам променлива value която ще дърщи стойноста която get ми връща т.е стойноста от ключа
            mapObj.set(word, value + 1) // и тук към ключа тоест думата , увеличавам с едно стойноста
        }
    }

    let result = ""; // за да ги изпринтирам на нов ред
    
    for (let [key, val] of mapObj) { // тук итерирам по мапа като го деструкторирам на key и value което ще ми върне думата и стойноста
        if (val % 2 !== 0) { // ако стоноста не нечетна
            result += key + " "; // към резултата който искам да принтирам добавям ключа и празно място защото така трябва по условие
        }
    }

    console.log(result);
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');