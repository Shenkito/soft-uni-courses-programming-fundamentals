function inventory(input) {

    let heroes = []; // тук създадох празен масив в който да запазя свойте обекти.

    for (let i = 0; i < input.length; i++) { // тук итерирам по дължината на inputa 

        let objHero = {}; // създадох празен обект
        
        let line = input[i].split(" / "); // тук взимам всяка линия от инпута която ми е подадена като стринг и премахвам наклонената черта , което ми връща масив от елементи
        
        let hero = line.shift(); // взимам си първия елемент който е името на героя
        let level = Number(line.shift()); // взимам си втория елемент който е левела на героя
        let items = line.shift().split(" , "); // взимам и последния останал елемент с инвентарите и сплитвам запетайката което ще ми върне масив от елементи тоест масив с инвантарите

        objHero.Hero = hero; // тук по условие задавам Hero на oбекта и присвоявам стойноста от елемента горе
        objHero.level = level; // същото само , че за левела
        objHero.Items = items; // същото само , че за инвентара

        heroes.push(objHero); // пушвам първия обект в арея който създадох в началото.
    }

    heroes.sort((a, b) => a.level - b.level); // по условие трябва да сортирам изхода по ниво от малко към голямо

    for (let j = 0; j < heroes.length; j++) { // итерирам по арея с обектите
        console.log(`Hero: ${heroes[j].Hero}`); // отпечатвам 
        console.log(`level => ${heroes[j].level}`); //
        console.log(`items => ${heroes[j].Items}`); //
    }
}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log("=========");

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);