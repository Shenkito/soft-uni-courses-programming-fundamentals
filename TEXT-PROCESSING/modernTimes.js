function modernTimes(text) {
    
    let textArr = text.split(" "); // сплитвам си текста
    let isSpecial = false; // създавам си контролна булева

    for (let word of textArr) { // итерирам по текста и взимам всяка дума 
        if (word.startsWith("#") && word.length > 1) { // ако думата ми започва с # и дължината е по голяма от 1 защото не ми трябва да е само #
            for (let char of word) { // проверявам дали думата съдържа само букви 
                char = char.toLowerCase() // правя ги на малки букви
                if (char.charCodeAt(0) > 97 && char.charCodeAt(0) < 122) { // тук вече правя самата проверка по ASCII
                    isSpecial = true; // ако е само от букви то тогава булевата ми става true
                    console.log(word.substring(1)); // принтирам думата като премахвам в началото #
                    break; // и брейквам
                }
            }
        }
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');