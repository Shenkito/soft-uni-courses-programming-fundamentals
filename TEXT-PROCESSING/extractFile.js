function extractFile(input) {

    let data = input.split("\\"); // сплитвам
    let info = {}; // със сигурност може да има по прости решения , но аз реших да тренирам обект затова създадох обект
    let file = data[data.length - 1]; // взимам винаги последния елемент защото по условие той ще ми трябва
    let indexOfDot = file.lastIndexOf("."); // в случай че името е name.data.info а не само name.info по условие името на файла ще е до последната точка от последната до края ще е file extensiona затова взимам последния индекс на който имам знака

    let fileName = file.substring(0, indexOfDot); // името на файла както обясних на горния ред
    let extension = file.substring(indexOfDot + 1); // екстеншъна както обясних на по по горния ред
    
    info[fileName] = extension; // бутам ги в обекта

    for (let el in info) { // итерирам по обекта
        console.log(`File name: ${el}`); // принтирам името 
        console.log(`File extension: ${info[el]}`); // принтирам екстеншъна
    }
}

extractFile('C:\\Internal\\training-internal\\Template.info.pptx');
console.log("=================================");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');