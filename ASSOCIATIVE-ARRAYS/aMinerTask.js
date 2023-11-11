function aMinerTask(input) {

    let resources = new Map(); // създавам мап

    // let array = Array.from(input); // ако не го направя това най вероятно ползвам директно инпута , но го разбрах в последствие ?

    for (let i = 0; i < input.length; i += 2) { // итерирам по арейя като е през две защото имам елемент и количество като едно.
        
        let item = input[i] // взимам си елемента , като ако беше с инпут щеше да е input[i]
        let quantity = Number(input[i + 1]) // тук си взимам количеството , като ако беше по input щеше да е input[i + 1];

        if (!resources.has(item)) { // проверявам дали мапа ми има този елемент
            resources.set(item, quantity); // ако го няма ще сетне такъв (елемент => количество)
        } else { // ако го имам 
            let currQnt = resources.get(item); // тук ми връша текущото количество на елемента (предмета)
            resources.set(item, quantity + currQnt) // и тук като към текущото количество добавям новото и сетвам итема с новите стойности тоест нещо като ъпдейт
        }
    }

    let result = Array.from(resources); // тук ми връща арей от мапа който има друг арей с  елемент и количество

    for (let [item, quantity] of result) { // итерирам 
        console.log(`${item} -> ${quantity}`); // и принтирам елемента и количеството
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );