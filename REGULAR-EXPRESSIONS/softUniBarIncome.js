function softUniBarIncome(input) {
    
    let pattern = /%(?<costumer>[A-Z][a-z]+)%[^|$%.]*<(?<item>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
    let total = 0;


    for (let line of input) { // итерирам по входните данни
        
        let match = [];

        if (line === "end of shift") {
            break;
        }

        if (pattern.test(line)) { // проверявам дали линията мачва регекса ми което връща true или false ако е true

            match = line.match(pattern); //  връша нещо като масив?(итеръбъл)? ако ползвам g в регекса ще върне всички мачове , иначе само първия мач с което по доло достъпвам групите
            let price = Number(match.groups.count) * Number(match.groups.price); // тук пресмятам цената като пак достъпвам групите 
            total += price; // добавям към общата цена 

            console.log(`${match.groups.costumer}: ${match.groups.item} - ${price.toFixed(2)}`); // взимам си от групите елементите и ги принтирам
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`); // принтирам и тотъла
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);