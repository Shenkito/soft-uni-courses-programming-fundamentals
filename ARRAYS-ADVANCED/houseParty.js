function houseParty(input) {

    let listArr = [];

    for (let element of input) {
        
        let commands = element.split(" is ");
        let name = commands[0];
        let command = commands[1];
        
        if (command === "going!") {
            
            if (!listArr.includes(name)) {
                listArr.push(name);
            
            } else {
            
                console.log(`${name} is already in the list!`);
            }
        
        } else if (command === "not going!") {
            
            if (!listArr.includes(name)) {
            
                console.log(`${name} is not in the list!`);
            
            } else if(listArr.includes(name)) {
            
                listArr.pop(name);
            }
        }
    }
    console.log(listArr.join("\n"));
}

houseParty([
'Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
console.log("=====");
houseParty([
'Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);