function revealWords(data, text) {

    let words = data.split(", "); // сплитвам по запетайка и празно място думите
    let txt = text.split(" "); // после сплитвам текста
    
    for (let word of words) { // итерирам по думите
        for (let i = 0; i < txt.length; i++) { // после по текста
            if (txt[i].includes("*") && txt[i].length === word.length) { // проверявам ако елемента съдържа * и ако дължината на елемента е същата като дължината на думата която ми е дадена
                txt[i] = word; // то тогава заменям елемента с думата
            }
        }
    }

    console.log(txt.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
console.log("---------------");
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')