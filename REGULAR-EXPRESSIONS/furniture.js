function furniture(input) {

    let regex = />>(?<name>[A-Za-z]+)<<(?<price>[+-]?([0-9]*[.])?[0-9]+)[!](?<quantity>[0-9]+)/g;

    console.log("Bought furniture:");

    let sum = 0;

    for (let command of input) { // итерирам по входните данни

        if (command === 'Purchase') { // ако стигна тази команда то тогава break`вам цикъла
            break;
        }

        let result = command.toString().matchAll(regex); // тук обърщам входните данни на стринг за да мога да използвам matchAll което ми връща всички валидни останали елементи

        for (let el of result) { // итерирам по тях
            console.log(`${el.groups.name}`); // принтирам името на предмета като го взимам от групите който в регекса съм създал
            sum += Number(`${el.groups.price}` * Number(`${el.groups.quantity}`)) // изчислявам изхарчените пари като взимам цената пак от групата която съм създал в регекса и я умножавам по количеството като взимам пак групата която съм създал в регекса
        }

    }

    console.log(`Total money spend: ${sum.toFixed(2)}`); // и накрая принтирам и похарченото
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);