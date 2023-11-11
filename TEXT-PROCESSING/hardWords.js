function hardWords(input) {
    
    let text = input[0].split(" "); // сплитвам си текста от входните данни за да мога да обходя всяка дума и да видя къде са празните места с долни черти
    let words = input[1]; // взимам си думите който трябва да попълвам на празните места

    for (let i = 0; i < text.length; i++) { // обхождам текста както казах за да мога да си взема празните места с долните черти

        if (text[i].includes("_")) { // ако елемента ми е празно място с долна черта

            let substrElement = text[i].substring(text[i].indexOf("_"), text[i].lastIndexOf("_") + 1); // взимам празните места от първата долна чарта до последната ?като +1 защото метода е exclusive?
            let lastChar = text[i].substring(text[i].lastIndexOf("_") + 1); // с този ред тук си взимам евентуално ако имам пунктуационен знак на края в думата който е ___. за пример
            
            for (let word of words) { // итерирам по думите 

                if (substrElement.length === word.length) { // ако празното място с долните черти дължината му е еднаква с на думата
                    text[i] = word; // то тогава замествам с думата

                    if (lastChar) { // и проверявам дали имам пунктуационен знак
                        text[i] = text[i] + lastChar; // и го добавям към текста
                    } 
                }
            }
        }
    }

    console.log(text.join(" ")); // принтирам
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);