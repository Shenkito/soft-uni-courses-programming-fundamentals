function gladiatorInventory(input) {

    let inventory = input.shift().split(" ");
    
    let commandsArr = input;

    for (let i = 0; i < commandsArr.length; i++) {
        
        let commands = commandsArr[i].split(" ");
        let command = commands[0];
        let item = commands[1];

        switch (command) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
            break;
            case "Trash":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
            break;
            case "Repair":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
            break;
            case "Upgrade":
                let arr = item.split("-");

                    let currItem = arr[0];
                    let upgrade = arr[1];
                    let result = `${currItem}:${upgrade}`;
                    let indexOf = inventory.indexOf(currItem);

                    if(inventory.includes(currItem)) {
                        inventory.splice(indexOf + 1, 0, result);
                    }
            break; 
        }
    }
    console.log(inventory.join(" "));
}


gladiatorInventory(
['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);

console.log("===============");

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)