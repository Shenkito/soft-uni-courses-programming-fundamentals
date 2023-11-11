function train(input) {
    
    let wagons = input.shift().split(" ").map(Number);
    let maxCapacity = input.shift().split(" ").map(Number);

    for (let curr of input) {
        
        let command = curr.split(" ");
        // console.log(command[0]);
        
        if (command[0] === "Add") {
            
            wagons.push(command[1]);
            // console.log(wagons);
        
        } else {
            
            let passengers = Number(command[0]);

            for (let i = 0; i < wagons.length; i++) {

                if (wagons[i] + passengers <= maxCapacity) {
                    
                    wagons[i] += passengers;

                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);